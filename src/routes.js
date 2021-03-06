import BasicDataPage from "./Pages/BasicDataPage";
import NotFoundPage from "./Pages/NotFoundPage";
import HomePage from "./Pages/HomePage";
import LayoutPage from "./Layout";
import LoginPage from "./Pages/LoginPage";
import ManageFilePage from "./Pages/ManageFilePage";
import InformationCompany from "./Pages/BasicDataPage/InformationCompany";
import InformationCustomer from "./Pages/BasicDataPage/InformationCustomer";
import InformationStaff from "./Pages/BasicDataPage/InformationStaff";
import ListCost from "./Pages/BasicDataPage/ListCost";
import ListCarriers from "./Pages/BasicDataPage/ListCarriers";
import ListAgents from "./Pages/BasicDataPage/ListAgent";
import InformationBrand from "./Pages/BasicDataPage/InformationBrand";
import ReceiptsExpensesPage from "./Pages/ReceiptsExpensesPage";
import Payment from "./Pages/ReceiptsExpensesPage/Payment";
import CreateFollow from "./Pages/ManageFilePage/CreateFollow";
import CreateJobOrder from "./Pages/ManageFilePage/CreateJobOrder";
import CreateJobBoat from "./Pages/ManageFilePage/CreateJobBoat";
import Pending from "./Pages/ManageFilePage/Pending";
import PaymentRequest from "./Pages/ReceiptsExpensesPage/PaymentRequest";
import DuyetThanhToan from "./Pages/ReceiptsExpensesPage/DuyetThanhToan";
import FindData from "./Pages/ReceiptsExpensesPage/FineData";
import PrintManager from "./Pages/ManageFilePage/PrintManager";
import BoatCont from "./Pages/ReceiptsExpensesPage/BoatCont";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/dasboard",
    component: LayoutPage,
    routes: [
      {
        name: "Dữ Liệu Cơ Bản",
        path: "/dasboard/dulieucoban",
        component: BasicDataPage,
        routes: [
          {
            name: "Thông Tin Công Ty",
            path: "/dasboard/dulieucoban/thongtincongty",
            component: InformationCompany,
          },
          {
            name: "Thông Tin Khách Hàng",
            path: "/dasboard/dulieucoban/thongtinkhachhang",
            component: InformationCustomer,
          },
          {
            name: "Danh Sách Nhân Viên",
            path: "/dasboard/dulieucoban/danhsachnhanvien",
            component: InformationStaff,
          },
          {
            name: "Thông Tin Các Loại Chi Phí",
            path: "/dasboard/dulieucoban/danhsachcacloaichiphi",
            component: ListCost,
          },
          {
            name: "Danh Mục Hãng Tàu",
            path: "/dasboard/dulieucoban/danhmuchangtau",
            component: ListCarriers,
          },
          {
            name: "Danh Mục Đại Lý",
            path: "/dasboard/dulieucoban/danhmucdaily",
            component: ListAgents,
          },
          {
            name: "Thông Tin Chi Nhánh",
            path: "/dasboard/dulieucoban/thongtinchinahnh",
            component: InformationBrand,
          },
        ],
      },
      {
        name: "Quản Lý Thu Chi",
        path: "/dasboard/quanlythuchi",
        component: ReceiptsExpensesPage,
        routes: [
          {
            name: "Phiếu Chi Tạm Ứng",
            path: "/dasboard/quanlythuchi/phieuchitamung",
            component: Payment,
          },
          {
            name: "Yêu Cầu Thanh Toán",
            path: "/dasboard/quanlythuchi/yeucauthanhtoan",
            component: PaymentRequest,
          },
          {
            name: "Duyệt Thanh Toán Của Khách Hàng",
            path: "/dasboard/quanlythuchi/duyethanhtoan",
            component: DuyetThanhToan,
          },
          {
            name: "Tra Cứu Dữ Liệu",
            path: "/dasboard/quanlythuchi/tracuudulieu",
            component: FindData,
          },
          {
            name: "Chi Phí Cược Tàu/Cont",
            path: "/dasboard/quanlythuchi/chiphitaucont",
            component: BoatCont,
          },
        ],
      },
      {
        name: "Quản Lý Hồ Sơ",
        path: "/dasboard/quanlyhoso",
        component: ManageFilePage,
        routes: [
          {
            name: "Tạo Phiếu Theo Dõi",
            path: "/dasboard/quanlyhoso/taophieutheodoi",
            component: CreateFollow,
          },
          {
            name: "Tạo Job Order",
            path: "/dasboard/quanlyhoso/taojoborder",
            component: CreateJobOrder,
          },
          {
            name: "Tạo Job Book Tàu",
            path: "/dasboard/quanlyhoso/taojobbooktau",
            component: CreateJobBoat,
          },
          {
            name: "Duyệt Job Order",
            path: "/dasboard/quanlyhoso/duyetjoborder",
            component: Pending,
          },
          {
            name: "Báo Biểu Hồ Sơ",
            path: "/dasboard/quanlyhoso/baobieuhoso",
            component: PrintManager,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
];

export default routes;
