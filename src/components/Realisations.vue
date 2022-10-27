<template>
  <div class="min-h-screen flex flex-col justify-center bg-repeat bg-topography">

    <div class="relative flex flex-col my-12">
      <div class="absolute inset-0 inset-x-0 -inset-y-4 xl:inset-x-1/4 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transform skew-y-2 sm:skew-y-0 sm:rotate-1 sm:rounded-2xl"></div>
      <div class="relative bg-gradient-to-br from-cyan-400 to-sky-500 sm:w-1/2 sm:max-w-screen-md sm:mx-auto sm:rounded-2xl px-4 py-10 sm:p-12 shadow-lg">
        <div class="text-4xl 2xl:text-6xl font-semibold text-center tracking-widest uppercase text-gray-900">
          <p>Mes réalisations</p>
        </div>
      </div>
    </div>

    <div class="relative flex my-20 justify-center items-center flex-wrap">
      <div class="absolute inset-0 inset-x-0 xl:inset-x-64 bg-gradient-to-br from-cyan-200 to-sky-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-2xl"></div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-center text-4xl font-bold tracking-tight text-sky-600">
            <p>Site web portfolio</p>
          </div>
          <div class="text-center text-4xl font-semibold tracking-tight text-sky-500">
            <p>Vue.js - Tailwind</p>
          </div>
          <div class="text-justify text-2xl">
            <p>Le site web sur lequel vous êtes actuellement a été réalisé principalement avec <a class="text-sky-600" href="https://vuejs.org/" target="_blank" rel="Noopener">Vue.js</a> 
              et <a class="text-sky-600" href="https://tailwindcss.com/" target="_blank" rel="Noopener">Tailwind CSS</a>. J'avais eu l'occasion de faire 
              <a class="text-sky-600" href="https://old.hugo.eynard-home.fr/" target="_blank" rel="Noopener">mon ancien site portfolio</a> lors d'un projet en DUT, il était construit en HTML, CSS 
              et Javascript natif avec un peu de PHP pour la page de contact. Je l'avais ensuite hébergé sur un Raspberry Pi dans mon garage avec un serveur web Apache.</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="relative py-4 my-4 sm:max-w-md sm:mx-auto z-20">
          <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
          <a href="https://github.com/Hugogo22/Portfolio-Firebase" target="_blank" rel="Noopener">
            <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-5 space-y-6  transform hover:scale-105 transition-transform">
              <img src="logo-github.png" alt="Logo de github">
            </div>
          </a>
        </div>
        <div class="relative py-4 my-4 sm:max-w-md sm:mx-auto z-20">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
          <a href="https://old.hugo.eynard-home.fr/" target="_blank" rel="Noopener">
            <div class="relative bg-white sm:rounded-2xl space-y-6  transform hover:scale-105 transition-transform">
              <img src="ancien-site.png" class="sm:rounded-2xl" alt="Illustration ancien site">
            </div>
          </a>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-justify text-2xl">
            <p>Pour ce nouveau site, étant donné que j'avais plus de liberté j'ai décidé d'utiliser des outils plus modernes. Le framework Javascript Vue.js m'a permis de créer facilement un site avec de
              belles transitions entre les pages, même s'il permet de faire des choses beaucoup plus poussées. J'ai néanmoins profité de la partie backend de Vue.js sans laquelle
              je n'aurais pas pu utiliser Tailwind pleinement par exemple. Le framework CSS Tailwind a grandement facilité et accéléré la mise en place d'un site responsive.
            </p>
          </div>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-justify text-2xl">
            <p>J'ai ensuite hébergé mon site sur <a class="text-sky-600" href="https://firebase.google.com/" target="_blank" rel="Noopener">Firebase</a> ce qui 
              m'a permis de mettre le site en ligne très facilement et de le mettre a jour en une seule commande. Je n'ai également rien eu besoin de configurer pour que mon site
              soit en HTTPS. Pour la page de contact j'ai utilisé <a class="text-sky-600" href="https://www.emailjs.com/" target="_blank" rel="Noopener">EmailJS</a> et pour 
              installer tout cela j'ai utilisé le package manager <a class="text-sky-600" href="https://www.npmjs.com/" target="_blank" rel="Noopener">npm</a>. Le code 
              est disponible sur <a class="text-sky-600" href="https://github.com/Hugogo22/Portfolio-Firebase" target="_blank" rel="Noopener">mon github</a>.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative flex my-20 justify-center items-center flex-wrap">
      <div class="absolute inset-0 inset-x-0 xl:inset-x-64 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-2xl"></div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-center text-4xl font-bold tracking-tight text-sky-600">
            <p>Création de NFT</p>
          </div>
          <div class="text-center text-4xl font-semibold tracking-tight text-sky-500">
            <p>Hardhat - Solidity - Python</p>
          </div>
          <div class="text-justify text-2xl">
            <p>J'ai réalisé une collection de 10 000 <a class="text-sky-600" href="https://cryptoast.fr/non-fungible-token-nft-ou-token-non-fongible/" target="_blank" rel="Noopener">NFT</a> sur 
              la blockchain <a class="text-sky-600" href="https://polygon.technology/" target="_blank" rel="Noopener">Polygon</a> nommé "Cool Sheep Club". 
              Pour la création des images je me suis associé à un ami designer qui s'est chargé de dessiner les différentes composantes, 
              puis j'ai assemblé les images avec un script Python qui sélectionne les différentes composantes selon des probabilités prédéfinies.
              À l'aide d'un autre script j'ai généré les métadonnées avec le lien permanent vers les images hébergées sur <a class="text-sky-600" href="https://www.pinata.cloud/" target="_blank" rel="Noopener">Pinata</a>.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="relative py-4 my-4 sm:max-w-md sm:mx-auto z-20">
          <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
          <a href="https://github.com/Hugogo22/Cool-Sheep-Club-NFT" target="_blank" rel="Noopener">
            <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-5 space-y-6  transform hover:scale-105 transition-transform">
              <img src="logo-github.png" alt="Logo de github">
            </div>
          </a>
        </div>
        <div class="relative py-4 my-4 sm:max-w-md sm:mx-auto z-20">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
          <a href="https://opensea.io/collection/cool-sheep-club" target="_blank" rel="Noopener">
            <div class="relative bg-white sm:rounded-2xl space-y-6  transform hover:scale-105 transition-transform">
              <img src="cool-sheep-club.png" class="sm:rounded-2xl" alt="Illustration NFT Cool Sheep Club">
            </div>
          </a>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-justify text-2xl">
            <p>J'ai créé un <a class="text-sky-600" href="https://github.com/Hugogo22/Cool-Sheep-Club-NFT" target="_blank" rel="Noopener">dêpot github</a> avec les scripts Python et les 
              contrats Solidity, où est expliqué comment créer des NFT a l'aide de celui-ci. Nous avons créé 
              une <a class="text-sky-600" href="https://opensea.io/collection/cool-sheep-club" target="_blank" rel="Noopener">collection OpenSea</a> pour mettre en vente les NFT.
            </p>
          </div>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-justify text-2xl">
            <p>Concrètement, les NFT sont représentés par un contrat (ou programme) codé en solidity et sur une blockchain, dans notre cas Polygon. Pour compiler les contrats et écrire
              des scripts pour interagir avec la blockchain j'ai utilisé <a class="text-sky-600" href="https://hardhat.org/" target="_blank" rel="Noopener">Hardhat</a> avec Node.js.
            </p>
          </div>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-justify text-2xl">
            <p>La dernière étape était de mettre en vente les NFT sur OpenSea. Étant donné qu'ils ne permettent pas de mettre en vente des NFT automatiquement sur la blockchain Polygon, 
              j'ai créé un script python avec la librairie <a class="text-sky-600" href="https://www.selenium.dev/" target="_blank" rel="Noopener">Selenium</a>. 
              Le script met en vente les NFT une à une avec un prix qui est déterminé par sa rareté.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative flex my-20 justify-center items-center flex-wrap">
      <div class="absolute inset-0 inset-x-0 xl:inset-x-64 bg-gradient-to-br from-cyan-200 to-sky-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-2xl"></div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-center text-4xl font-bold tracking-tight text-sky-600">
            <p>Projets en DUT</p>
          </div>
          <div class="text-center text-4xl font-semibold tracking-tight text-sky-500">
            <p>C - Java - Web - SQL</p>
          </div>
          <div class="text-justify text-2xl">
            <p>Pendant mes deux années de DUT, j'ai eu l'occasion de réaliser plusieurs projets, tout seul ou en groupe.</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="relative py-4 my-4 sm:max-w-md sm:mx-auto z-20">
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
          <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-10 space-y-6">
            <img src="blocus.png" alt="Illustration projet C">
          </div>
        </div>
        <div class="relative py-4 my-4 sm:max-w-md sm:mx-auto z-20">
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
          <div class="relative bg-white sm:rounded-2xl space-y-6">
            <img class="sm:rounded-2xl" src="SameGame.svg" alt="Illustration projet Java">
          </div>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-justify text-2xl">
            <p>J'ai réalisé des jeux 2D en C avec une bibliothèque graphique fournie par l'IUT et en Java avec Swing. J'ai également créé plusieurs sites web, dont un site en PHP 
              qui reproduit le site <a class="text-sky-600" href="https://doodle.com/fr/" target="_blank" rel="Noopener">doodle</a> avec un système d'authentification et des sondages
              pour choisir le moment d'une réunion et qui utilise une base de données SQL. Un des derniers projets que j'ai réalisés est un système de réservation de chambres d'hotel et de 
              visualisation du taux de remplissage des chambres en java avec Swing et une base de données SQL.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative flex my-20 justify-center items-center flex-wrap">
      <div class="absolute inset-0 inset-x-0 xl:inset-x-64 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-3 sm:rounded-2xl"></div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-center text-4xl font-bold tracking-tight text-sky-600">
            <p>Jeu mobile <i>Space Race</i></p>
          </div>
          <div class="text-center text-4xl font-semibold tracking-tight text-sky-500">
            <p>UNITY 3D - C#</p>
          </div>
          <div class="text-justify text-2xl">
            <p>Ce projet qui est encore en cours de réalisation est un jeu en 3D fait sur Unity que je souhaite publier sur android dans un premier temps, puis éventuellement sur IOS. 
              Je fais tout moi même, que ce soit la modélisation en 3D ou la programmation et j'ai acquis la grande majorité des compétences nécessaires de façon autodidacte.</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="relative py-4 my-4 sm:max-w-md sm:mx-auto z-20">
          <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
          <a href="https://unity.com/fr" target="_blank" rel="Noopener">
            <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-10 space-y-6 transform hover:scale-105 transition-transform">
              <img src="logo-unity.png" alt="Logo de Unity">
            </div>
          </a>
        </div>
        <div class="relative py-4 my-4 sm:max-w-md sm:mx-auto z-20">
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
          <div class="relative bg-white sm:rounded-2xl space-y-6">
            <img class="sm:rounded-2xl" src="unity-1.png" alt="Illustration projet Unity">
          </div>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-justify text-2xl">
            <p>C'est un jeu de course dans l'espace où le vaisseau accélère tout seul et on peut contrôler l'orientation du vaisseau sur un seul axe. 
              Au début il sera uniquement possible de faire la course avec les fantômes des joueurs ayant déjà complété la course, mais le but est de rendre le jeu multijoueur en temps réel.</p>
          </div>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-justify text-2xl">
            <p>Au cours de la création du jeu, j'ai déjà pu programmer en C# les contrôles du vaisseau, un système de chronométrage, ou encore un système pour choisir son vaisseau. 
              Je suis actuellement en train de développer des outils pour créer les différentes cartes de mon jeu plus facilement et de façon plus poussée.</p>
          </div>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-justify text-2xl">
            <p>Une autre partie très importante du développement du jeu est la modélisation en 3D. La qualité de celle-ci change énormément le ressenti du jeu, 
              j'ai donc choisi un style graphique simpliste afin de limiter le temps dédié à la modélisation qui est très chronophage, tout en gardant un bon ressenti.</p>
          </div>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-md sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl space-y-6">
          <img class="sm:rounded-2xl" src="unity-2.png" alt="Illustration modélisation 3D">
        </div>
      </div>
    </div>
    
  </div> 

</template>

<script>
  /*
  from-cyan-400 to-sky-500
  from-sky-500 to-blue-600
  from-blue-600 to-indigo-700
  */
export default {
  name: 'Accueil',
  props: {
  }
}
</script>
