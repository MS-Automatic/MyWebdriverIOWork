import { typeSearchInput,  clickEnterSearch,  clickCartIcon,} from "../pages/Header_functions";
import { openURLMoto,  expectToHaveURLCart,} from "../pages/Applications_functions";
import { closeModal } from "../pages/Home_functions";
import { addToCartButton2 } from "../pages/SRP_functions";
describe("Login", () => {
  it("Moto - add to cart", () => { 
    openURLMoto();
    closeModal();
    typeSearchInput();
    clickEnterSearch();
    addToCartButton2();
    clickCartIcon();
    expectToHaveURLCart();
  });  
});
