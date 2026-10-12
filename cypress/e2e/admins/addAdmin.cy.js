import SidebarPage from '../../pages/SidebarPage';
import AdminsPage from '../../pages/AdminsPage';
import AddAdminPage from '../../pages/AddAdminPage';
import { generateRandomNumber } from '../../support/utils';

describe('Admin management - Add admin', () => {
  beforeEach(() => {
    cy.login();
    SidebarPage.openAdminsPage();
  });

  it('creates an admin, verifies it, and stores reusable fixture data', () => {
    const uniqueId = String(generateRandomNumber()).slice(-8);
    const admin = {
      firstName: 'Test',
      lastName: 'Admin',
      phoneNumber: `09${uniqueId}`,
      role: 'Super Admin',
    };

    AdminsPage.openAddAdminPage();
    AddAdminPage.enterFirstName(admin.firstName);
    AddAdminPage.enterLastName(admin.lastName);
    AddAdminPage.enterPhoneNumber(admin.phoneNumber);
    AddAdminPage.enterPassword('qwerrryttryrft');
    AddAdminPage.selectRole(admin.role);
    AddAdminPage.selectAreasByIndex(0, 1);
    AddAdminPage.save();

    // If the app remains on the form after saving, return to the Admins page here.
    AdminsPage.searchAdmin(admin.phoneNumber.slice(1));
    AdminsPage.verifyAdminExistsByPhone(admin.phoneNumber.slice(1));

    cy.writeFile('cypress/fixtures/admin.json', {
      ...admin,
      fullName: `${admin.firstName} ${admin.lastName}`,
    });
  });
});
