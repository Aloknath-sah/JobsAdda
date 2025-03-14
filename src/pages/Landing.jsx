import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import Autoplay from "embla-carousel-autoplay";

export const Landing = () => {
  return (
    <main className="mb-10">
      <section className="text-center">
        <h1 className="flex justify-center gradient-title text-4xl font-bold">
          <span className="py-10"> Find your dream jobs with </span>
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
      </div>
      {/* carousel */}
      <div className="flex justify-center py-5">
        <Carousel
          plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]}
          opts={{
            align: "start",
          }}
          className="w-full max-w-sm"
        >
          <CarouselContent className="flex gap-5 items-center">
            {companies.map(({ name, id, path }, index) => (
              <CarouselItem key={id ?? `company-${index}`} className="basis-1/3 lg:basis-1/4">
                <img src={path} alt={name} className="h-9 object-contain" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {/*   banner */}
      <div className="flex justify-center m-10">
        <img src="/job_banner.jpg" className="w-250 h-120" />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5">
        {/* cards */}
        <Card>
          <CardHeader>
            <CardTitle>For Job seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidate
          </CardContent>
        </Card>
      </section>

      {/* accordion */}
      <div className="m-5 p-5">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => {
            return (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{faq.question} </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </main>
  );
};
