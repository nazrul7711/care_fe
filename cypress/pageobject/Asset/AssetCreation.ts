// assetPage.ts

export class AssetPage {
  createAsset() {
    cy.get("button").should("contain", "Create Asset");
    cy.get("[data-testid=create-asset-buttom] button").click();
  }

  selectFacility(facilityName: string) {
    cy.get("input[name='facilities']")
      .type(facilityName)
      .then(() => {
        cy.get("[role='option']").contains(facilityName).click();
      });
    cy.get("[data-testid='submit-button']").click();
  }

  selectLocation(locationName: string) {
    cy.get("[data-testid=asset-location-input] input")
      .type(locationName)
      .then(() => {
        cy.get("[role='option']").contains(locationName).click();
      });
  }

  selectAssetType(assetType: string) {
    cy.get("[data-testid=asset-type-input] button")
      .click()
      .then(() => {
        cy.get("[role='option']").contains(assetType).click();
      });
  }

  selectAssetClass(assetClass: string) {
    cy.get("[data-testid=asset-class-input] button")
      .click()
      .then(() => {
        cy.get("[role='option']").contains(assetClass).click();
      });
  }

  enterAssetDetails(
    name: string,
    description: string,
    workingStatus: string,
    qrId: string,
    manufacturer: string,
    warranty: string,
    supportName: string,
    supportPhone: string,
    supportEmail: string,
    vendorName: string,
    serialNumber: string,
    lastServicedOn: string,
    notes: string
  ) {
    cy.get("[data-testid=asset-name-input] input").type(name);
    cy.get("[data-testid=asset-description-input] textarea").type(description);
    cy.get("[data-testid=asset-working-status-input] li")
      .contains(workingStatus)
      .click();
    cy.get("[data-testid=asset-qr-id-input] input").type(qrId);
    cy.get("[data-testid=asset-manufacturer-input] input").type(manufacturer);
    cy.get("[data-testid=asset-warranty-input] input").type(warranty);
    cy.get("[data-testid=asset-support-name-input] input").type(supportName);
    cy.get("#customer-support-phone-div").type(supportPhone);
    cy.get("[data-testid=asset-support-email-input] input").type(supportEmail);
    cy.get("[data-testid=asset-vendor-name-input] input").type(vendorName);
    cy.get("[data-testid=asset-serial-number-input] input").type(serialNumber);
    cy.get("[data-testid=asset-last-serviced-on-input] input").type(
      lastServicedOn
    );
    cy.get("[data-testid=asset-notes-input] textarea").type(notes);
  }

  clickCreateAsset() {
    cy.get("#submit").contains("Create Asset").click();
  }

  verifySuccessNotification(message: string) {
    cy.verifyNotification(message);
  }
}
