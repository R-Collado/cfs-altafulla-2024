export const getActualComponentRoute = (pathname: string): string => {
  let actualRoute;
  if (pathname === "/") {
    // If the pathname is "/", set the actual route to "/"
    actualRoute = "/";
  } else if (pathname.split("/")[1].length === 2) {
    // If the pathname has a length of 2 after splitting by "/", set the actual route to the second segment
    actualRoute = "/" + pathname.split("/")[2];
  } else {
    // Otherwise, set the actual route to the first segment after splitting by "/"
    actualRoute = "/" + pathname.split("/")[1];
  }

  return actualRoute;
};
