"use client";

import Image from "next/image";
import Lottie from "lottie-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MyPost } from "@/data/posts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { urlifyAndClean } from "@/utilities/function";

async function getData() {
  const res = await fetch("https://medium2.p.rapidapi.com/");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Home() {
  return (
    <div className="sm-w-3/12 md:w-6/12 flex flex-col min-h-screen gap-10">
      {MyPost.map((post, index) => (
        <Card key={index} className="h-60 flex truncate">
          <div className="w-1/2">
            <CardHeader>
              <div className="flex gap-3 text-sm items-center">
                <Link href={`/${post.author}`} className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://lh3.googleusercontent.com/a/AAcHTtfNb9RpzIDBaim0kvQNyl4kYFL2Le5yWI8MfWxm14hj2oo=s192-c-rg-br100" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="font-bold">Fahmi Achmad</span>
                </Link>
                <span className="opacity-30">Augusts 5, 2023</span>
              </div>
            </CardHeader>
            <CardContent>
              <Link href={`/${post.author}/${urlifyAndClean(post.title)}`}>
                <CardTitle className="w-full whitespace-normal mb-3">{post.title}</CardTitle>
                <div className="line-clamp-3 opacity-60 whitespace-normal font-light" dangerouslySetInnerHTML={{ __html: post?.content }} />
              </Link>
            </CardContent>
          </div>
          <Link href={`/${post.author}/${urlifyAndClean(post.title)}`} className="w-1/2 relative">
            <img style={{ objectFit: "cover", objectPosition: "center", borderRadius: "30px", padding: "1rem", height: "100%" }} src={post.coverImg} />
          </Link>
        </Card>
      ))}
    </div>
  );
}
