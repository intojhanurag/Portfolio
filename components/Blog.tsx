"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Red-Black tree and Hash Collision",
      date: "12Feb, 2025",
      excerpt: "The struggle behind a simple looking problem",
      readTime: "5 min read",
      link:"https://medium.com/@aojharaj2004/how-i-debugged-my-code-and-learned-about-red-black-trees-and-hash-collisions-7be057a58a4d"
    },
    
  ];

  return (
    <section className="py-16 w-full bg-black ">
      <div className="container max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-green-400 mb-8">Latest Blogs</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-black p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100"
            >
              <div className="flex items-center gap-2 text-green-400 mb-3">
                <BookOpen size={16} />
                <span className="text-sm">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white-800">{post.title}</h3>
              <p className="text-white-600 mb-4 text-sm">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-white-500 underline">{post.date}</span>
                <Button
                  onClick={() => window.open(post.link, "_blank")}
                  variant="outline"
                  className="text-green-400 hover:text-green-500 hover:bg-green-50"
                >
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
