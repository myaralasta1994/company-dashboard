import AdminsPage from '../../pages/AdminsPage';
import EditAdminPage from '../../pages/EditAdminPage';
import SidebarPage from '../../pages/SidebarPage';
import { generateRandomNumber } from '../../support/utils';


describe('Admin management - Edit admin', () => {
  let admin;

  beforeEach(() => {
    cy.login();
    SidebarPage.openAdminsPage();
    cy.fixture('admin.json').then((data) => { admin = data; });
  });

  it('edits the fixture admin, verifies the saved values, and updates admin.json', () => {
    const uniqueId = String(generateRandomNumber()).slice(-8);

    // Stable, readable edits instead of a hard-coded phone number that may collide.
    const updatedAdmin = {
      ...admin,
      firstName: `${admin.firstName.replace(/Updated+$/, '')}Updated`,
      lastName: `${admin.lastName.replace(/Updated+$/, '')}Updated`,
      phoneNumber: `09${uniqueId}`
    };

    // Find the existing row by the original phone number and open its three-dot menu.
    AdminsPage.searchAdmin(admin.phoneNumber.slice(1));
    AdminsPage.openAdminActionsByPhone(admin.phoneNumber.slice(1));
    AdminsPage.clickEdit();

    EditAdminPage.enterFirstName(updatedAdmin.firstName);
    EditAdminPage.enterLastName(updatedAdmin.lastName);
    EditAdminPage.enterPhoneNumber(updatedAdmin.phoneNumber);
    EditAdminPage.save();

    // Confirm the app returned to the list. If not, add the app's actual navigation here.
    AdminsPage.searchInput.should('be.visible');
    AdminsPage.searchAdmin(updatedAdmin.phoneNumber.slice(1));
    AdminsPage.verifyAdminRowByPhone(updatedAdmin.phoneNumber.slice(1), {
      firstName: updatedAdmin.firstName,
      lastName: updatedAdmin.lastName,
      phoneNumber: updatedAdmin.phoneNumber.slice(1),
    });

    cy.writeFile('cypress/fixtures/admin.json', {
      ...updatedAdmin,
      phoneNumber: updatedAdmin.phoneNumber,
      fullName: `${updatedAdmin.firstName} ${updatedAdmin.lastName}`,
    });
  });
});
