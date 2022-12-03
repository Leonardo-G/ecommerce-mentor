import LayoutPage from "../components/layout/LayoutPage";
import { Images } from "../components/media/Images";
import { ProductPage } from '../components/product/ProductPage';

export default function Home() {
    return (
        <LayoutPage>
            <ProductPage />
        </LayoutPage>
    )
}
