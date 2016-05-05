function clickHome() {
    loadRootCategories();
    FormPrincipal.show();
    closeHamburguer();
    closeSearchMenu();
    FormPrincipal.ListBoxSearch.selectedKey = "none";
    FormPrincipal.FlexNavigation.forceLayout();
}

function clickCart() {
    openCart();
    closeHamburguer5();
    FormCart.forceLayout();
}

function clickStore() {
    cleanCityCriteria();
    initMap();
    FormLocator.show();
    closeHamburguer6();
}