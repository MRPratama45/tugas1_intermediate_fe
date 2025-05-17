import React, { useState } from "react";
import bgKonten from "../assets/background/dashboard.png";
import vectorChill from "../assets/vector/Vector-film.png";
import accountProfile from "../assets/account/account-profile.png";
import vectorSpeaker from "../assets/vector/Vector-speaker.png";
import detailAkun from "../assets/vector/Vector-bottom.png";
import vectorLeft from "../assets/vector/Vector-left.png";
import vectorRight from "../assets/vector/Vector-right.png";
import vectorBottom from "../assets/vector/Vector-bottom.png";
import mtf1 from "../assets/poster/melanjutkanNontonFilm/Don'tLookUp.png";
import mtf2 from "../assets/poster/melanjutkanNontonFilm/allOfUsDead.png";
import mtf3 from "../assets/poster/melanjutkanNontonFilm/batman.png";
import mtf4 from "../assets/poster/melanjutkanNontonFilm/otto.png";
import trs1 from "../assets/poster/topRating/suzume.png";
import trs2 from "../assets/poster/topRating/jurassicWorld.png";
import trs3 from "../assets/poster/topRating/sonic2.png";
import trs4 from "../assets/poster/topRating/allOfDead.png";
import trs5 from "../assets/poster/topRating/bigHero.png";
import fm1 from "../assets/poster/filmTrending/tehTomorrow.png";
import fm2 from "../assets/poster/filmTrending/quantumania.png";
import fm3 from "../assets/poster/filmTrending/guardiansGalaxy.png";
import fm4 from "../assets/poster/filmTrending/otto.png";
import fm5 from "../assets/poster/filmTrending/littleMermaid.png";
import rb1 from "../assets/poster/rilisBaru/littleMermaid.png";
import rb2 from "../assets/poster/rilisBaru/duttyAfterSchool.png";
import rb3 from "../assets/poster/rilisBaru/bigHero.png";
import rb4 from "../assets/poster/rilisBaru/allOfDead.png";
import rb5 from "../assets/poster/rilisBaru/missing.png";
import ila1 from "../assets/vector/Vector-list-akun.png";
import ila2 from "../assets/vector/Vector-star.png";
import ila3 from "../assets/vector/Vector-list-akun-keluar.png";

const LayoutDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("isOpen adalah", isOpen);

  return (
    <>
      {/* navbar */}
      <div
        className="navbar fixed text-center bg-black text-white p-2 flex w-full ps-20  
          s:z-10 
      "
      >
        <div className="icon flex">
          <img
            src={vectorChill}
            alt="icon-Chill"
            className="vectorChill w-10 h-10"
          />
          <h2 className="font-bold relative top-1 ms-2 text-2xl">CHILL</h2>
        </div>
        <div className="flex w-full justify-between">
          <div className="menu flex mx-10 items-center">
            <ul className="flex">
              <li className="mr-10">
                {" "}
                <a href="#">Series</a>
              </li>
              <li className="mr-10">
                {" "}
                <a href="#">Film</a>
              </li>
              <li>
                {" "}
                <a href="#">Daftar Saya</a>
              </li>
            </ul>
          </div>
          <div className="avatar flex items-center me-24 ">
            <img
              src={accountProfile}
              alt="vector-avatar"
              className="w-10 h-10 rounded-full mx-3"
            />
            <button>
              <img
                onClick={() => setIsOpen(!isOpen)}
                src={detailAkun}
                alt="icon-detailAkun"
              />
            </button>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } listDetailAkun text-left absolute right-6 top-16 w-44 bg-black rounded-md`}
            >
              <ul>
                <li>
                  <div className="flex p-2">
                    <img src={ila1} alt="venctor-profil" className="me-3 w-5" />
                    <a href="#">Profil Saya</a>
                  </div>
                </li>
                <li>
                  <div className="flex p-2">
                    <img
                      src={ila2}
                      alt="venctor-profil"
                      className="me-3 w-5 h-5"
                    />
                    <a href="#">Ubah Premium</a>
                  </div>
                </li>
                <li>
                  <div className="flex p-2">
                    <img src={ila3} alt="venctor-profil" className="me-3 w-5" />
                    <a href="#">keluar</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img src={bgKonten} alt="img-bg" className="w-full" />
      {/* konten header */}
      <div
        className="absolute top-96 left-24
      lg:top-20 lg:left-16 
       md:top-10 md:left-16 md:text-sm
      "
      >
        <div className="kontenHeader w-1/2 p-5  text-white">
          <h1
            className="font-bold 
          2xl:text-7xl
          lg:text-4xl  
          md:text-4xl "
          >
            Duty After School
          </h1>
          <br />
          <p>
            Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
            Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk
            siswa sekolah menengah. Mereka pun segera menjadi pejuang garis
            depan dalam perang.
          </p>
        </div>
        {/* button */}
        <div className="button flex justify-between text-white">
          <div className="button">
            <button className="p-5" type="button">
              Mulai
            </button>
            <button className="mx-2" type="button">
              <span className="rounded-xl border-2 border-white px-2">i</span>{" "}
              Selengkapnya
            </button>
            <button
              className="mx-3 rounded-3xl border-2 border-white px-1"
              type="button"
            >
              18+
            </button>
          </div>
          <button className="mx-5" type="button">
            <img
              src={vectorSpeaker}
              alt="speaker-off"
              className="mx-3 rounded-3xl border-2 border-white p-1"
            />
          </button>
        </div>
      </div>
      {/* konten */}
      <div className="bg-black">
        {/* melanjutkan tonton */}
        <div
          className="melanjutkan-tonton-film text-white w-fit
          2xl:ms-24 
          lg:ms-24
          md:ms-24 
          sm:ms-0 
          s:ms-0 
          "
        >
          <h1 className="font-bold text-4xl">Melanjutkan Tonton Film</h1>
          <br />
          <div
            className="flex relative gap-5 w-fit h-56 text-white 
          2xl:overflow-visible
          xl:overflow-hidden
          lg:overflow-hidden
          md:overflow-hidden 
          sm:overflow-hidden
          s:overflow-hidden
          "
          >
            <span
              className="absolute top-20
            "
            >
              <img
                src={vectorLeft}
                alt="arah-kiri"
                className="relative rounded-xl w-10 h-10 -left-5 p-1 border-2 bg-black
                sm:invisible 
                md:invisible 
                lg:visible lg:left-5
                xl:visible xl:left-5
                2xl:visible               
                 "
              />
            </span>
            <img src={mtf1} alt="img-1" />
            <img src={mtf2} alt="img-2" />
            <img src={mtf3} alt="img-3" />
            <img src={mtf4} alt="img-4" />
            <span className="flex absolute top-20 justify-end w-full">
              <img
                src={vectorRight}
                alt="arah-kanan"
                className="flex relative rounded-xl w-10 h-10 top-1/2  p-1 border-2 border-white bg-black 
                sm:invisible 
                md:invisible 
                lg:visible lg:-left-1
                xl:visible 
                2xl:visible 2xl:left-6 
                "
              />
            </span>
          </div>
        </div>
        <br />
        {/* top rating */}
        <div className="top-rating ms-24 text-white w-fit">
          <h1 className="font-bold text-4xl">
            Top rating Film dan Series Hari ini
          </h1>
          <br />
          <div
            className="flex relative gap-24 w-fit h-96 text-white
                2xl:overflow-visible
                xl:overflow-hidden
                lg:overflow-hidden
                md:overflow-hidden 
                sm:overflow-hidden
                s:overflow-hidden
          "
          >
            <span className="absolute top-40">
              <img
                src={vectorLeft}
                alt="arah-kiri"
                className="relative rounded-xl w-10 h-10 top-1/2 -left-5 p-1 border-2 bg-black
                sm:invisible 
                md:invisible 
                lg:visible lg:left-5
                xl:visible xl:left-5
                2xl:visible     
                "
              />
            </span>
            <img src={trs1} alt="img-1" />
            <img src={trs2} alt="img-2" />
            <img src={trs3} alt="img-3" />
            <img src={trs4} alt="img-4" />
            <img src={trs5} alt="img-5" />
            <span className="flex absolute top-40 justify-end w-full">
              <img
                src={vectorRight}
                alt="arah-kanan"
                className="flex relative rounded-xl w-10 h-10 top-1/2 left-6 p-1 border-2 border-white bg-black
                sm:invisible 
                md:invisible 
                lg:visible lg:-left-5
                xl:visible 
                2xl:visible 2xl:left-6

                "
              />
            </span>
          </div>
        </div>
        <br />
        {/* film trending */}
        <div className="film-trending text-white w-fit ms-24 ">
          <h1 className="font-bold text-4xl">Film Trending</h1>
          <br />
          <div
            className="flex relative gap-x-14 w-fit h-96 text-white 
          2xl:gap-x-14 
          lg:gap-x-10
          md:gap-x-5 
          sm:gap-x-0 
          s:gap-x-0
          "
          >
            <div className="gorupListFilmTrending flex relative">
              <span className="absolute top-40">
                <img
                  src={vectorLeft}
                  alt="arah-kiri"
                  className="relative rounded-xl w-10 h-10 top-1/2 -left-5 p-1 border-2 bg-black                  
                  sm:invisible 
                md:invisible 
                lg:visible lg:left-5
                xl:visible xl:left-5
                2xl:visible     "
                />
              </span>
              <img src={fm1} alt="img-1" />
              <p className="border-1 border-white rounded-bl-lg rounded-tr-lg bg-red-700 color-white h-14 w-10 text-center relative right-16">
                Top <br />
                <span>10</span>
              </p>
            </div>
            <div className="gorupListFilmTrending flex relative">
              <img src={fm2} alt="img-2" />
              <p className="border-1 border-white rounded-bl-lg rounded-tr-lg bg-red-700 color-white h-14 w-10 text-center relative right-16">
                Top <br />
                <span>10</span>
              </p>
            </div>

            <div className="gorupListFilmTrending flex relative">
              <img src={fm3} alt="img-3" />
              <p className="border-1 border-white rounded-bl-lg rounded-tr-lg bg-red-700 color-white h-14 w-10 text-center relative right-16">
                Top <br />
                <span>10</span>
              </p>
            </div>

            <div className="gorupListFilmTrending flex relative">
              <img src={fm4} alt="img-4" />
              <p className="border-1 border-white rounded-bl-lg rounded-tr-lg bg-red-700 color-white h-14 w-10 text-center relative right-16">
                Top <br />
                <span>10</span>
              </p>
            </div>

            <div className="gorupListFilmTrending flex relative">
              <img src={fm5} alt="img-5" />
              <p className="border-1 border-white rounded-bl-lg rounded-tr-lg bg-red-700 color-white h-14 w-10 text-center relative right-16">
                Top <br />
                <span>10</span>
              </p>
              <span className="flex absolute top-40 justify-end w-full">
                <img
                  src={vectorRight}
                  alt="arah-kanan"
                  className="flex relative rounded-xl w-10 h-10 top-1/2 right-4 p-1 border-2 border-white bg-black"
                />
              </span>
            </div>
          </div>
        </div>
        <br />
        {/* rilis baru */}
        <div className="rilis-baru text-white w-fit ms-24">
          <h1 className="font-bold text-4xl">Rilis Baru</h1>
          <div
            className="flex relative w-fit h-96 text-white
          2xl:gap-x-24 
          lg:gap-x-10
          md:gap-x-5 
          sm:gap-x-0 
          s:gap-x-0
          "
          >
            <div className="gorupListRilisBaru flex relative">
              <span className="absolute top-40">
                <img
                  src={vectorLeft}
                  alt="arah-kiri"
                  className="relative rounded-xl w-10 h-10 top-1/2 -left-5 p-1 border-2 bg-black
                  sm:invisible 
                md:invisible 
                lg:visible lg:left-5
                xl:visible xl:left-5
                2xl:visible     
                  "
                />
              </span>
              <img src={rb1} alt="img-1" />
              <p className="border-1 border-white rounded-bl-lg rounded-tr-lg bg-red-700 color-white h-14 w-10 text-center absolute right-8">
                Top <br />
                <span>10</span>
              </p>
            </div>
            <div className="gorupListRilisBaru flex relative">
              <img src={rb2} alt="img-2" />
              <p className="border-1  rounded-lg bg-blue-700 color-white font-bold h-8 w-36 p-1 text-center absolute left-3 top-5">
                Episode Baru
              </p>
            </div>
            <div className="gorupListRilisbaru flex relative">
              <img src={rb3} alt="img-3" />
              <p className="border-1 border-white rounded-bl-lg rounded-tr-lg bg-red-700 color-white h-14 w-10 text-center absolute right-8">
                Top <br />
                <span>10</span>
              </p>
            </div>
            <div className="gorupListRilisBaru flex relative">
              <img src={rb4} alt="img-4" />
              <p className="border-1 rounded-lg bg-blue-700 color-white font-bold h-8 w-36 p-1 text-center absolute left-3 top-5">
                Episode Baru
              </p>
            </div>
            <div className="gorupListRilisbaru flex relative">
              <img src={rb5} alt="img-5" />
              <span className="flex absolute top-40 justify-end w-full">
                <img
                  src={vectorRight}
                  alt="arah-kanan"
                  className="flex relative rounded-xl border-2 border-white bg-black w-10 h-10 p-1 left-5
                  sm:invisible 
                md:invisible 
                lg:visible lg:-left-1
                xl:visible 
                2xl:visible 2xl:left-6
                  "
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer>
        <div className="bg-black text-white p-10">
          <div className="ms-14 border-4 border-white">
            <div className="lg:grid lg:grid-cols-4 lg:justify-center lg:items-center md:inline-block">
              <div className="block w-full">
                <div className="groupLogo inline-flex items-center mb-5">
                  <img src={vectorChill} alt="logo" className="w-20" />
                  <h2 className="font-bold text-7xl">CHILL</h2>
                </div>
                <p className="block">@2023 Chill All Rights Reserved</p>
              </div>
              <div className="col-span-2">
                <div className="genre grid grid-cols-4 w-full md:h-10 lg:h-auto border-4 border-yellow-400">
                  <div className="">
                    <div className="md:w-full  md:border-4 md:border-red-500 md:flex md:justify-between">
                      <p className="font-bold">Genre</p>
                      <span>
                        <img
                          src={vectorBottom}
                          alt="vector-bottom"
                          className="lg:invisible"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="listGenre w-fit">
                    <ul className="md:invisible lg:visible">
                      <li>Aksi</li>
                      <li>Anak-Anak</li>
                      <li>Anime</li>
                      <li>Britania</li>
                    </ul>
                  </div>

                  <div className="listGenre w-fit">
                    <ul className="md:invisible lg:visible">
                      <li className="text-black">...</li>
                      <li>Drama</li>
                      <li>Fantasi Ilmiah & Fantasi</li>
                      <li>Kejahatan</li>
                      <li>KDrama</li>
                    </ul>
                  </div>
                  <div className="listGenre">
                    <ul className="md:invisible lg:visible">
                      <li className="text-black">...</li>
                      <li>Komedi</li>
                      <li>Petualangan</li>
                      <li>Perang</li>
                      <li>Romantis</li>
                    </ul>
                  </div>
                  <div className="listGenre">
                    <ul className="md:invisible lg:visible">
                      <li className="text-black">...</li>
                      <li>Sains & Alam</li>
                      <li>Thriller</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="colGenre md:h-10 lg:h-auto">
                <div className="md:flex md:justify-between">
                  <p className="font-bold">Bantuan</p>
                  <span>
                    <img
                      src={vectorBottom}
                      alt="vector-bottom"
                      className="md:relative md:top-3 lg:invisible"
                    />
                  </span>
                </div>
                <div className="listGenre w-fit">
                  <ul className="md:invisible lg:visible">
                    <li>FAQ</li>
                    <li>Kontak Kami</li>
                    <li>Privasi</li>
                    <li>Syarat & Ketentuan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </footer>
    </>
  );
};

export default LayoutDashboard;
