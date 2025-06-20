// app/page.tsx

export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header__content">
            <div className="header__info">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                alt="Logo"
                className="header__logo"
              />
              <div className="header__title">Gaming Portal</div>
            </div>
            <div className="header__icons">
              <div className="header__subtitle">Nikita Zholudiev (Album: 121265)</div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/147/147142.png"
                alt="User Icon"
                id="header__icon"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="content">
            <div className="content__left bordered">
              <div className="content__title">
                <div className="text-small-muted">Opublikowano: 21 kwietnia 2025, 12:45</div>
                <div className="title">Nowa generacja PlayStation 5 już tu jest!</div>
              </div>
              <section className="image">
                <img
                  src="https://ae01.alicdn.com/kf/S6cfac973fc6849a5996610c751eea0d1o.png"
                  alt="PlayStation 5"
                  className="image"
                />
              </section>
              <section>
                <p>
                  <span className="span">PlayStation 5</span> to najnowsza konsola od Sony, która oferuje graczom
                  niesamowite wrażenia dzięki technologii SSD, obsłudze ray tracingu oraz zaawansowanemu systemowi
                  audio 3D.
                </p>
              </section>
              <section>
                <p>
                  Nowa konsola wspiera rozdzielczość 4K i wkrótce będzie dostępna z nowymi grami, które wykorzystają jej
                  pełny potencjał. Dzięki błyskawicznemu ładowaniu, granie nigdy nie było szybsze.
                </p>
              </section>
              <section>
                <p>
                  PlayStation 5 wprowadza również nowy kontroler DualSense, który daje graczom bardziej immersyjne
                  doświadczenia dzięki haptic feedback i adaptacyjnym triggerom.
                </p>
              </section>
              <section>
                <p>
                  Dzięki wstecznej kompatybilności, możesz cieszyć się grami z PS4 w ulepszonej wersji, co sprawia, że
                  PS5 jest prawdziwym centrum multimedialnym.
                </p>
              </section>
              <section className="right">
                <p className="text-small-muted">Źródło: GamingNews.pl</p>
              </section>
            </div>

            <div className="content__right bordered">
              <div className="content__right__top">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                  alt="Point"
                  className="point"
                />
                <div className="content__right__top__title">
                  <div className="title-right">Zobacz również inne wiadomości</div>
                  <div className="education">
                    Linki do artykułów nie działają, są zamieszczone dla celów edukacyjnych.
                  </div>
                </div>
              </div>

              <section className="section">
                <h3>Kibersport: Team Phoenix wygrywa finały Mistrzostw Świata w Valorant</h3>
                <p>
                  Po intensywnym meczu drużyna z Polski zdobywa tytuł mistrzów świata i nagrodę 1 miliona dolarów.
                </p>
              </section>

              <section className="section">
                <h3>Streaming: Nowy rekord na Twitchu – 1,5 mln widzów na żywo!</h3>
                <p>
                  Streamerka LUNA rozgrywająca finałową walkę w grze Elden Ring przyciągnęła ogromną publikę.
                </p>
              </section>

              <section className="section">
                <h3>VR Gaming: Nowe okulary Meta Quest 4 z fotorealistyczną grafiką</h3>
                <p>Immersyjna technologia przyszłości. Gracze twierdzą, że czują się "jak w Matrixie".</p>
              </section>

              <section className="section">
                <h3>Retro: Powrót kultowego Pegasusa – konsola z 90’s wraca w wersji mini</h3>
                <p>Nowa edycja zawiera 200 klasycznych gier, w tym Contra, Mario i Tanki!</p>
              </section>

              <section className="section">
                <h3>DevZone: Twórcy ogłaszają otwarte beta-testy gry RPG “Shadow of Epoch”</h3>
                <p>
                  Niezależne studio z Wrocławia zaskakuje graczy mrocznym klimatem i dynamiczną walką.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer__content">
            <div className="footer__left">
              <div className="footer__title">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
                  alt="Logo"
                  className="header__logo"
                />
                <div className="header__title">Gaming News Portal</div>
              </div>
              <div className="footer__text">
                Portal stworzony z pasji do gamingu. Śledź z nami premiery, testy sprzętu, wywiady z twórcami i wszystko,
                co związane z grami.
              </div>
            </div>
            <div className="footer__right">
              <div style={{ fontWeight: 600 }}>Technologie:</div>
              <div className="footer__text">HTML + CSS + Gaming pasja</div>
            </div>
          </div>
          <div className="footer__divider"></div>
          <div className="footer__down">
            Projekt i realizacja: GamingDev Team &copy; 2025 Gaming World News
          </div>
        </div>
      </footer>
    </>
  );
}
