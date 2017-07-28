import { HospitalPatientFrontendPage } from './app.po';

describe('hospital-patient-frontend App', () => {
  let page: HospitalPatientFrontendPage;

  beforeEach(() => {
    page = new HospitalPatientFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
