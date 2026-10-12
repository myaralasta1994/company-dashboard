import AdminsPage from '../../pages/AdminsPage';
import SidebarPage from '../../pages/SidebarPage';

describe('Admin management - Search admin', () => {
  let admin;

  beforeEach(() => {
    cy.login();
    SidebarPage.openAdminsPage();
    cy.fixture('admin.json').then((data) => { admin = data; });
  });

  it('finds the admin using the phone number stored in admin.json', () => {
    AdminsPage.searchAdmin(admin.phoneNumber.slice(1));
    AdminsPage.verifyAdminExistsByPhone(admin.phoneNumber.slice(1));
  });
});
