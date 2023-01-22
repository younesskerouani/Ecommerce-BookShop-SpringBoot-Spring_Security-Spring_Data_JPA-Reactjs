import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect,useState } from 'react';
import * as ProductApi from '../../service/api/ProductRequest';



export default function FeaturedInfo() {
  
  const [productsCount, setProductsCount] = useState(0);

  useEffect(()=>{
    const CountProduct = async ()=>{
    try{
        const res =await ProductApi.getProductCount();
        setProductsCount(res.data);
    }catch(err){}
    }  ;
    CountProduct() 
},[])

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Products</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{productsCount}</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
