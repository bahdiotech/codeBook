import React from "react";
import { Hero } from "./Hero";
import { FeaturedProducts } from "./FeaturedProducts";
import { Testimonials } from "./Testimonials";
import { Faq } from "./Faq";
import { useTitle } from "../../hook/useTitle";

export const HomePage = ({paramId, setParamId}) => {
  useTitle('Access Latest Computer Science E-book - CodeBook')
  return (
    <main>
      <Hero />
      <FeaturedProducts paramId={paramId} setParamId={setParamId} />
      <Testimonials/>
      <Faq />
      
    </main>
  );
};
