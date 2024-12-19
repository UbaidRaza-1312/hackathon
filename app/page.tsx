import { Hero } from "./hero/page";
import { Products } from "./product/page";
import  { Upper , Header , Footer} from "./layout";
import { Comments } from "./comments/page";

export default function Home() {
  return (
    <div>
    <Upper />
    <Header/>
    <Hero />
    <Products />
    <Comments />
    <Footer />
    
    </div>
  );
}
