import LoginPage from "../../support/pageObjects/LoginPage";

describe("Login - Successful Authentication", () => {
  beforeEach(() => {
    LoginPage.visit();
  });
  it("should log in successfully with valid credentials", () => {
    LoginPage
      .fillUsername("standard_user") //Arrange
      .fillPassword("secret_sauce") //Arrange
      .clickLogin() //Act
      .validateSuccessfulLogin(); // Assert
  });
});
