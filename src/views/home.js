import React from 'react'

import { Helmet } from 'react-helmet'

import HomepageNavbar from '../components/homepage-navbar'
import Feature from '../components/feature'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Kajoo - Build Sitecore pages visually in minutes</title>
        <meta
          name="description"
          content="Kajoo takes care of the tedious part of working with Sitecore. Give it a design and watch it convert it to a functioning page in minutes. "
        />
        <meta
          property="og:title"
          content="Kajoo - Build Sitecore pages visually in minutes"
        />
        <meta
          property="og:description"
          content="Kajoo takes care of the tedious part of working with Sitecore. Give it a design and watch it convert it to a functioning page in minutes. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a38aa983-2408-4700-bd13-f066aeb36eea/83457e41-6b15-49f4-9906-02b66d9d751f?org_if_sml=1"
        />
      </Helmet>
      <HomepageNavbar rootClassName="rootClassName"></HomepageNavbar>
      <div className={styles['container01']}>
        <div className={styles['hero']}>
          <div className={styles['hero-text-container']}>
            <h1 className={` ${styles['text']} ${projectStyles['heading1']} `}>
              Turn mockups to Sitecore pages in minutes
            </h1>
            <p className={` ${styles['Text01']} ${projectStyles['body1']} `}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                Move from ideas to live web pages the smart way. Never waste
                your resources on the tedious work in between ever again
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
            <div className={styles['Cta-btn-container']}>
              <button
                type="submit"
                className={` ${styles['cta-btn']} ${projectStyles['button']} `}
              >
                <span
                  className={` ${styles['text07']} ${projectStyles['navbar-Link']} `}
                >
                  Request a demo
                </span>
              </button>
            </div>
          </div>
          <iframe
            src="https://player.vimeo.com/video/463534028?badge=0&amp;amp;autopause=0&amp;amp;player_id=0&amp;amp;app_id=58479"
            className={styles['Iframe']}
          ></iframe>
        </div>
      </div>
      <div className={styles['Social-proof']}>
        <div className={styles['TAP']}>
          <img
            alt="image"
            src="/playground_assets/sitecore_logo_rgb.svg"
            className={styles['image']}
          />
          <h3
            className={` ${styles['sitecore-escription']} ${projectStyles['body3']} `}
          >
            A trusted sitecore technology partner
          </h3>
        </div>
      </div>
      <div className={styles['container02']}>
        <Feature
          text="Upload an image of a wireframe or create one using Kajooâs library of 21 building blocks. Kajooâs trained AI neural network algorithms will convert your wireframe to functioning web elements."
          feature_title="Ideate &amp; convert"
          rootClassName="rootClassName8"
        ></Feature>
      </div>
      <div className={styles['container03']}></div>
      <div className={styles['container04']}>
        <Feature
          text="Define your brand colors and styles, and apply them easily to your wireframes. Save them as a âstyle guideâ to reuse in future projects."
          feature_title="Style &amp; apply themes"
          rootClassName="rootClassName7"
        ></Feature>
      </div>
      <div className={styles['container05']}></div>
      <div className={styles['container06']}>
        <Feature
          text="Hit the âPublishâ button to generate the code. Import the code into Sitecore and you have a draft page ready for content!"
          feature_title="Generate, build &amp; publish"
          rootClassName="rootClassName6"
        ></Feature>
      </div>
      <div className={styles['Why']}>
        <div className={styles['heading-container']}>
          <h1 className={` ${styles['text08']} ${projectStyles['heading2']} `}>
            <span>The story behind Kajoo</span>
          </h1>
        </div>
        <div className={styles['container07']}>
          <span className={` ${styles['text10']} ${projectStyles['body2']} `}>
            <span>
              âI just love it when it takes blood, sweat, and tears to get my
              ideas from sketches to fully functioning Sitecore experiencesâ
              said No-one Ever. And it got us thinking: Translating wireframes
              and mockups to Sitecore code is not hard. But it&apos;s tedious.
              So, we made Kajoo, a low-code/no-code solution that converts
              design to code. Magically. Auto-magically!
            </span>
          </span>
        </div>
      </div>
      <div className={styles['How']}>
        <div className={styles['container08']}>
          <span
            className={` ${styles['text12']} ${projectStyles['heading3']} `}
          >
            Developers
          </span>
          <span className={` ${styles['text13']} ${projectStyles['body3']} `}>
            Tasked with building new pages or components? And it needs to be
            done, like today? Kajoo automates tedious work. Upload mockups,
            approve the automatically-generated Sitecore code and get on with
            higher-value work.
          </span>
        </div>
        <div className={styles['container09']}>
          <span
            className={` ${styles['text14']} ${projectStyles['heading3']} `}
          >
            Marketers
          </span>
          <span className={` ${styles['text15']} ${projectStyles['body3']} `}>
            <span>
              Kajoo is a fast and easy way to create Sitecore components and
              pages that expand the functionality of your Sitecore
              implementation. Go ahead, dream big, and let Kajoo do the hard
              work. Unleash your creativity. You design it. Kajoo builds it.
            </span>
            <br></br>
            <span></span>
          </span>
        </div>
        <div className={styles['container10']}>
          <span
            className={` ${styles['text18']} ${projectStyles['heading3']} `}
          >
            Agencies and partners
          </span>
          <span className={` ${styles['text19']} ${projectStyles['body3']} `}>
            âKajoo expedites development of Sitecore components, increasing
            efficiency, boosting revenues, and reducing internal friction. You
            can save up to 80%-100% of development time.
          </span>
        </div>
      </div>
      <div className={styles['container11']}>
        <div className={styles['Cta-btn-container1']}>
          <button
            type="submit"
            className={` ${styles['cta-btn1']} ${projectStyles['button']} `}
          >
            <span
              className={` ${styles['text20']} ${projectStyles['navbar-Link']} `}
            >
              Request a demo
            </span>
          </button>
        </div>
      </div>
      <div className={styles['section-separator']}></div>
      <Footer></Footer>
    </div>
  )
}

export default Home
