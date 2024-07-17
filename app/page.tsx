// app/page.tsx
"use client";
import ApplyForm from '@/Jobhunting-/Components/ApplyForm';
import Hero from './Components/Hero';
import Jobuploadform from './Components/Jobuploadform';

const Page = () => {
  return (
    <div>
      <Hero />
      <ApplyForm />
      <Jobuploadform />
    </div>
  );
};

export default Page;
