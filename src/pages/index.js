import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Inuka’s Mission
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            With technology paving the way towards new developments, accessing and sharing
            information is easier than ever before. With a simple click, Inuka can make your daily
            client experience simpler, stress-free and more efficient. Our mission is to create a
            world where technology and healthcare delivery are seamlessly intertwined, bringing
            together a unique user experience that facilitates a two-way communication between
            health providers and patients who speak different languages. With our wide range of
            easy-to-use features, you’ll feel your life improve right away. ​ Yes, we’re serious.
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="whoarewe" className="py-20 lg:pb-40 lg:pt-48">
      <div className="text-center lg:text-center container mx-auto">
        <br></br>
        <br></br>
        <br></br>

        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Who we are</h1>
        <p className="text-xl lg:text-2xl mt-6 font-light ">
          We are a multicultural diverse team (software developers/consultant, healthcare, business
          and management professionals) dedicated to providing cutting edge service to users
          worldwide. At Inuka Inc, we are committed to finding swifter and smoother solutions for
          the delivery of healthcare and essential services. From customised management to offline
          download options, you name it - we do it. You can trust that we’re here to provide you all
          the tools you need to make your healthcare and wellness delivery that much easier. Get
          started with us today and see the impact of our world-renowned App.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Meet the Team</h2>
          <div className="container mx-auto lg:center">
            <div className="flex flex-col sm:flex-row sm:-mx-1 mt-1 ">
              <div className="flex-3 px-3 ">
                <Card className="mb-8">
                  <p className="mt-4">
                    <img src="https://i.imgur.com/xkx66st.png"></img>
                  </p>
                  <p className="font-semibold text-xl">Seinyenede Onobrakpor</p>
                  <p className="font-semibold text-l">Chief Executive Officer</p>
                </Card>
              </div>
              <div className="flex-3 px-3">
                <Card className="mb-8">
                  <p className="mt-4">
                    <img src="https://i.imgur.com/2FZYdY9.png"></img>
                  </p>
                  <p className="font-semibold text-xl">Forest Park</p>
                  <p className="font-semibold text-l">Chief Operating Officer</p>
                </Card>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-2 px-3">
              <Card className="mb-8">
                <p className="mt-4">
                  <img src="https://i.imgur.com/yx0oz5P.png"></img>
                </p>
                <p className="font-semibold text-xl">Krystaleen Nichol</p>
                <p className="font-semibold text-l">Chief Communications Officer</p>
              </Card>
            </div>
            <div className="flex-2 px-3">
              <Card className="mb-8">
                <p className="mt-4">
                  <img src="https://i.imgur.com/NtEiWWg.png"></img>
                </p>
                <p className="font-semibold text-xl">Rukevwe Inikoro</p>
                <p className="font-semibold text-l">Chief Finance Officer</p>
              </Card>
            </div>
            <div className="flex-2 px-3">
              <Card className="mb-8">
                <p className="mt-4">
                  <img src="https://i.imgur.com/8GeXHKn.png"></img>
                </p>
                <p className="font-semibold text-xl">Ryker Rumsey</p>
                <p className="font-semibold text-l">Chief Technology Officer</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SplitSection
      id="about"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            The Hottest App on the Market Coming 2020
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            What started off at the <strong>Innovation for Health competition 2019</strong> to
            tackle one global health challenge is growing into an automated and intricate technology
            making a breakthrough in the delivery of healthcare and other essential services. From
            2020, Inuka is dedicated to making lives easier for patients, caregivers, allied and
            healthcare professionals who speak different languages by offering an innovative
            solution through its extensive platform.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      id="history"
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Our History</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Inuka Inc was born at the <strong>Innovation for Health competition 2019</strong>. It
            was 6 weeks of intense work among the multidisciplinary team. The normal patient-doctor
            encounter was transcribed and pre-recorded in 3 languages (English, Swahili and Sukuma)
            and enhanced with visuals to facilitate the doctor-patient experience. Subsequently,
            patient information is saved on to Inuka hardware to facilitate the patient’s future
            health encounter.{' '}
            <strong>
              Inuka won the competition in the category of family and community centered care
            </strong>
            .
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    {/*<SplitSection*/}
    {/*  primarySlot={*/}
    {/*    <div className="lg:pr-32 xl:pr-48">*/}
    {/*      <h3 className="text-3xl font-semibold leading-tight">*/}
    {/*        Search For Performance Optimization*/}
    {/*      </h3>*/}
    {/*      <p className="mt-8 text-xl font-light leading-relaxed">*/}
    {/*        With all the information in place you will be presented with an action plan that your*/}
    {/*        company needs to follow*/}
    {/*      </p>*/}
    {/*    </div>*/}
    {/*  }*/}
    {/*  secondarySlot={<SvgCharts/>}*/}
    {/*/>*/}
    {/*<section id="stats" className="py-20 lg:pt-32">*/}
    {/*  <div className="container mx-auto text-center">*/}
    {/*    <LabelText className="text-gray-600">Our customers get results</LabelText>*/}
    {/*    <div className="flex flex-col sm:flex-row mt-8 lg:px-24">*/}
    {/*      <div className="w-full sm:w-1/3">*/}
    {/*        <StatsBox primaryText="+100%" secondaryText="Stats Information"/>*/}
    {/*      </div>*/}
    {/*      <div className="w-full sm:w-1/3">*/}
    {/*        <StatsBox primaryText="+100%" secondaryText="Stats Information"/>*/}
    {/*      </div>*/}
    {/*      <div className="w-full sm:w-1/3">*/}
    {/*        <StatsBox primaryText="+100%" secondaryText="Stats Information"/>*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*</section>*/}
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Get in Touch</h3>
      <p className="mt-8 text-xl font-light">Send us an email to learn more about Inuka </p>
      <p className="mt-8">
        <a href="mailto:admin@inukahealth.com">
          <Button size="xl">Email: admin@inukahealth.com</Button>
        </a>
      </p>
    </section>
  </Layout>
);
