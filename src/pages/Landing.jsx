import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import companies from "../data/companies.json";

export const Landing = () => {
  console.log(companies[0].path);
  return (
    <main>
      <section className="text-center">
        <h1 className="flex justify-center gradient-title text-4xl font-bold">
          <span className="py-5"> Find your dream jobs with </span>
          <img
            src="/jobs_adda.png"
            alt="jobsAdda"
            className="h-14 sm:h-24 lg:h-32"
          />
        </h1>
        <p>Explore thousands of job listing and find perfect candidate.</p>
      </section>
      <div className="flex gap-6 justify-center py-5">
        {/* buttons */}

        <Link to="/jobs">
          <Button variant="blue" size="lg">
            Find Jobs
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="lg">
            Post a Job
          </Button>
        </Link>

        {/* carousel */}

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent>
            {companies.map(({ name, id, path }) => (
              <CarouselItem key={id}>
                <img src={path} alt={name} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/*   banner */}
      <section>{/* cards */}</section>
      {/* accordion */}
    </main>
  );
};
