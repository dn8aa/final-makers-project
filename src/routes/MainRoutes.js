import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import Profile from "../components/Profile/Profile";
import EditPost from "../components/WritePost/EditPost";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import DeletedProfilePage from "../pages/DeletedProfilePage";
import EditPostPage from "../pages/EditPostPage";
import EditProfilePage from "../pages/EditProfilePage";
import OurAuthorsPage from "../pages/OurAuthorsPage";
import PostPage from "../pages/PostPage";
import ProfilePage from "../pages/ProfilePage";
import SetProfilePage from "../pages/SetProfilePage";
import ShopPage from "../pages/ShopPage";
import WritePostPage from "../pages/WritePostPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/auth", element: <AuthPage />, id: 1 },
    { link: "/setprofile", element: <SetProfilePage />, id: 2 },
    { link: "profile/:email", element: <ProfilePage />, id: 3 },
    { link: "/", element: <HomePage />, id: 4 },
    { link: "/writepost", element: <WritePostPage />, id: 5 },
    { link: "/editpost/:index", element: <EditPostPage />, id: 6 },
    { link: "/post/:email/:index", element: <PostPage />, id: 7 },
    { link: "/editprofile/:id", element: <EditProfilePage />, id: 8 },
    { link: "/deletedprofile", element: <DeletedProfilePage />, id: 9 },
    { link: "/ourauthors", element: <OurAuthorsPage />, id: 10 },
    { link: "/shop", element: <ShopPage />, id: 11 },
    { link: "/cart", element: <CartPage />, id: 112 },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};
export default MainRoutes;
