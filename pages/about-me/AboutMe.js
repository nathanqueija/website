import React from 'react';
import Card from 'components/card';
import { Me, Profile, Text, Social, Link } from './AboutMe.style';
import { GoMarkGithub } from 'react-icons/go';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import { TiSocialInstagram } from 'react-icons/ti';

export default () => {
  return (
    <React.Fragment>
      <Me>
        <Profile>
          <Card img="/static/imgs/me.jpg" />
          <Social>
            <Link target="_blank" href="https://github.com/nathanqueija">
              <GoMarkGithub />
              github.com/nathanqueija
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/nathanqueija/"
            >
              <FaLinkedin />
              linkedin.com/in/nathanqueija/
            </Link>
            <Link target="_blank" href="mailto:nathanqcam@gmail.com">
              <IoIosMail />
              nathanqcam@gmail.com
            </Link>
            <Link target="_blank" href="https://www.facebook.com/nathanqueija">
              <FaFacebook />
              facebook.com/nathanqueija
            </Link>
            <Link target="_blank" href="https://twitter.com/nathanqueija">
              <FaTwitter />
              twitter.com/nathanqueija
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/nathan.queija/"
            >
              <TiSocialInstagram />
              instagram.com/nathan.queija/
            </Link>
          </Social>
        </Profile>
        <Text>
          <h1>Nathan Queija</h1>
          <h2>Sofware Engineer based in Berlin</h2>
          <p>
            Hi! Welcome and thanks for visiting. I am Nathan from Brazil
            currently living an adventure in Berlin.
            <br />
            Since this is my tech related personal space I must say that
            (spoiler alert) one part of me is also a software engineer. <br />I
            started coding when I was 14 building some scripts for RPG maker. Do
            you remember how awesome it was? I loved the idea that I could write
            some lines of code and change the behaviour of my own characters,
            but in the end the excitement was that I could build some stuff by
            myself.
            <br />
            When things started to get serious. You know... that moment when
            your mom start asking you what you're going to do with your life I
            realized that I could join what I liked to do with some studies and
            that's how I ended up studying Design and Development of Digital
            Games. <br />
            During my studies I participated in a project that was a partnership
            with the Ministry of Education in Brazil. The idea was that we would
            develop games to help schools in areas lacking basic resources to
            teach better and make education more attractive. When I saw my first
            game being played by a child that finally understood some
            mathematical equations I realized that my creation was not just
            about what I could build, but also how that could change and make
            other people's lives easier and that's the reason that motivates me
            until today. I realized that techonology it's not about some nerds
            wearing glasses sitting in a room full of pizza for hours. Ok,
            sometimes it is, but I realized that technology has the power to
            make the world a better place and the most fun part: I could
            participate on that. We all can, actually. <br />
            To make the long story short, since 2009 I've been working with
            software development. Until 2014 I worked with game developed mainly
            focusing on education and in 2015 I decided to move to web
            development and since then I've been working as a Frontend
            Developer.
            <br />
            I love programming because it is like art for me. Most of the times
            you need create something out of nothing and this is the most fun
            part in my opinion: the creation. I love translating user's needs to
            functional interfaces and make other people's lives easier.
            <br />
            As an engineer I have experience in some fields in software
            development like games, websites, SaaS platforms, mobile
            applications, etc, but like I said for the past 5 years I've been
            focusing on frontend side working with technologies like Javascript,
            HTML, CSS, React, Redux, Apollo, etc. As I am a curious guy I like
            to always learn something new (beyond German, of course), so I am
            doing some cool stuff on the backend as well with Elixir struggling
            and loving functional programming more each day.
            <br />
            That's all folks. Thanks for reading and feel free to contact me.
          </p>
        </Text>
      </Me>
    </React.Fragment>
  );
};
