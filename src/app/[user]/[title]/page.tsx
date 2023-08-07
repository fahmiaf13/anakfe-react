"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MyPost } from "@/data/posts";
import Link from "next/link";
import { urlifyAndClean } from "@/utilities/function";

export default function Page({ params }: { params: { title: string } }) {
  const detailPost: any = MyPost.find((item) => urlifyAndClean(item?.title) === urlifyAndClean(params?.title));
  console.log(detailPost);
  console.log(params.title);

  return (
    <>
      <Card className="flex w-1/2 flex-col">
        <CardHeader>
          <CardTitle className="w-full whitespace-normal mb-3">{detailPost?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <img style={{ objectFit: "cover", objectPosition: "center", borderRadius: "30px", padding: "1rem", height: "100%" }} src={detailPost?.coverImg} />
          <div className="font-light" dangerouslySetInnerHTML={{ __html: detailPost?.content }} />
        </CardContent>
      </Card>
    </>
  );
}
