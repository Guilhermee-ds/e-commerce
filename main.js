import { renderCatalog } from "./src/cardProduct";
import { initFilter } from "./src/filterCatalog";
import { initcart, renderProductCart, attPriceCart } from "./src/menu-car";


//call function
renderCatalog ();
initcart();
renderProductCart ();
attPriceCart();
initFilter();
