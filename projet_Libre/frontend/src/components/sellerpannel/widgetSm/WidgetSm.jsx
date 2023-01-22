import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn.shopify.com/s/files/1/0293/9277/products/DeAngeloTurtleneckSweater-Black_mer_2_360x.jpg?v=1644885629"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">david Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/EDUCMS/tz7n-7vqceaq86dprdnzag.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Jane kolby</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9cFu1BWHph9rQuPVv6-SxF17nD7dmosQJ64Vhy-gNtJKZhjbl7aFZo7N52Rmm4t3v4E&usqp=CAU"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">ahmed awed</span>
            <span className="widgetSmUserTitle">electronic professor</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://www.expatrio.com/sites/default/files/styles/header_image/public/2020-01/german%20university%20system%20%281%29.jpg?itok=08x9Ka_v"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna jane</span>
            <span className="widgetSmUserTitle">Economic Student</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://www.thebalancemoney.com/thmb/Ci8l5i-cl3_emjyarN7RVunlULo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/enjoying-his-studies-484286872-735782e8d2144f7496bf9b947bcc1a56.jpg"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Steven John</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
