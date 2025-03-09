import { BrowserRouter, Routes as ReactRouter, Route } from "react-router";
import DemoView from "../modules/demo/view/Demo.view";
import DemoDetailsView from "../modules/demo/view/DemoDetails.view";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouter>
        <Route path="/" element={<DemoView />} />
        <Route path="/demo/:id" element={<DemoDetailsView />} />
      </ReactRouter>
    </BrowserRouter>
  );
};

export default Routes;
