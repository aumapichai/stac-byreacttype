import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { ICatalog } from "../interface";

const BreadcrumbsComp: FC<{ state: ICatalog }> = ({ state }) => {
  const { catalog } = state;
  const [list, setList] = useState<any[]>([]);
  const { query } = useRouter();

  useEffect(() => {
    let listBreadcrumbs: any[] = [];
    console.log(query);
    const findPath = async () => {
      // const get = await catalog.links.find((rs:any)=>rs.rel === 'self');
      // if(get){
      //     listBreadcrumbs.push(get)
      // }
      // const hasParent = await catalog.links.find((rs:any)=>rs.rel === 'parent');
      // const hasRoot = await catalog.links.find((rs:any)=>rs.rel === 'root');
      // if(hasParent && hasRoot){
      //     if(hasParent.href === hasRoot.href){
      //         const getRoot = await fetch(hasParent.href).then(rs=>rs.json()).then(rs=>rs).catch(err=>console.log(err));
      //     }else{
      //     }
      // }
    };
    // {manageCatalog.breadcrumb.length && (
    //     <Breadcrumbs aria-label="breadcrumb">
    //       {manageCatalog.breadcrumb.slice(0, -1).map((e, i) => {
    //         return (
    //           <Box
    //             key={`breadcrumbs_${i}`}
    //             onClick={() => {
    //               handleClickTo(e.href, "back");
    //             }}
    //             sx={{ color: "white", cursor: "pointer" }}
    //           >
    //             {e.title}
    //           </Box>
    //         );
    //       })}
    //       <Typography variant="body2">
    //         {manageCatalog.breadcrumb[
    //           manageCatalog.breadcrumb.length - 1
    //         ].title
    //           ? manageCatalog.breadcrumb[
    //               manageCatalog.breadcrumb.length - 1
    //             ].title
    //           : ""}
    //       </Typography>
    //     </Breadcrumbs>
    //   )}
    return () => {};
  }, [state.urlSelf]);
  return <div>Breadcrumbs</div>;
};

export default BreadcrumbsComp;
