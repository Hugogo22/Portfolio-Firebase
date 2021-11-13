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
          <div class="text-left text-2xl">
            <p>J'ai réalisé une collection de 10 000 <a class="text-sky-600" href="https://cryptoast.fr/non-fungible-token-nft-ou-token-non-fongible/" target="_blank" rel="noreferrer">NFT</a> sur 
              la blockchain <a class="text-sky-600" href="https://polygon.technology/" target="_blank" rel="noreferrer">Polygon</a> nommé "Cool Sheep Club". 
              Pour la création des images mon meilleur ami s'est chargé de dessiner les différentes composantes, 
              puis j'ai assemblé les images avec un script python qui sélectionne les différentes composantes selon des probabilités prédéfinies.
              À l'aide d'un autre script j'ai généré les métadonnées avec le lien permanent vers les images hébergées sur <a class="text-sky-600" href="https://www.pinata.cloud/" target="_blank" rel="noreferrer">Pinata</a>.</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="relative py-4 my-4 sm:max-w-md sm:mx-auto z-20">
          <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
          <a href="https://github.com/Hugogo22/Cool-Sheep-Club-NFT" target="_blank" rel="noreferrer">
            <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-5 space-y-6  transform hover:scale-105 transition-transform">
              <img src="logo-github.png" alt="Logo de github">
            </div>
          </a>
        </div>
        <div class="relative py-4 my-4 sm:max-w-md sm:mx-auto z-20">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
          <a href="https://opensea.io/collection/cool-sheep-club" target="_blank" rel="noreferrer">
            <div class="relative bg-white sm:rounded-2xl space-y-6  transform hover:scale-105 transition-transform">
              <img src="cool-sheep-club.png" class="sm:rounded-2xl" alt="Illustration NFT Cool Sheep Club">
            </div>
          </a>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-left text-2xl">
            <p>J'ai créé un <a class="text-sky-600" href="https://github.com/Hugogo22/Cool-Sheep-Club-NFT" target="_blank" rel="noreferrer">dêpot github</a> avec les scripts python et les 
              contrats solidity où est expliqué rapidement comment créer des NFT a l'aide de celui-ci. Nous avons créer 
              une <a class="text-sky-600" href="https://opensea.io/collection/cool-sheep-club" target="_blank" rel="noreferrer">collection OpenSea</a> pour mettre en vente les NFT.
            </p>
          </div>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-sky-500 to-blue-600 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-left text-2xl">
            <p>Concrètement, les NFT sont représentés par un contrat (ou programme) codé en solidity et sur une blockchain, dans notre cas Polygon. Pour compiler les contrats et écrire
              des scripts pour interagir avec la blockchain j'ai utilisé <a class="text-sky-600" href="https://hardhat.org/" target="_blank" rel="noreferrer">Hardhat</a> avec Node.js.
            </p>
          </div>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-left text-2xl">
            <p>La dernière étape était de mettre en vente les NFT sur OpenSea. Étant donné qu'ils ne permettent pas de mettre en vente des NFT automatiquement sur la blockchain Polygon, 
              j'ai créé un script python avec la librairie <a class="text-sky-600" href="https://www.selenium.dev/" target="_blank" rel="noreferrer">Selenium</a>. 
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
            <p>Jeu mobile <i>Space Race</i></p>
          </div>
          <div class="text-center text-4xl font-semibold tracking-tight text-sky-500">
            <p>UNITY 3D - C#</p>
          </div>
          <div class="text-left text-2xl">
            <p>Ce projet qui est encore en cours de réalisation est un jeu en 3D fait sur Unity que je souhaite publier sur android dans un premier temps, puis éventuellement sur IOS. 
              Je fais tout moi même, que ce soit la modélisation en 3D ou la programmation et j'ai acquis la grande majorité des compétences nécessaires de façon autodidacte.</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="relative py-4 my-4 sm:max-w-md sm:mx-auto z-20">
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
          <a href="https://unity.com/fr" target="_blank" rel="noreferrer">
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
          <div class="text-left text-2xl">
            <p>C'est un jeu de course dans l'espace où le vaisseau accélère tout seul et on peut contrôler l'orientation du vaisseau sur un seul axe. 
              Au début il sera uniquement possible de faire la course avec les fantômes des joueurs ayant déjà complété la course, mais le but est de rendre le jeu multijoueur en temps réel.</p>
          </div>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-left text-2xl">
            <p>Au cours de la création du jeu, j'ai déjà pu programmer en C# les contrôles du vaisseau, un système de chronométrage, ou encore un système pour choisir son vaisseau. 
              Je suis actuellement en train de développer des outils pour créer les différentes cartes de mon jeu plus facilement et de façon plus poussée.</p>
          </div>
        </div>
      </div>
      <div class="relative py-4 my-4 sm:max-w-xl sm:mx-auto z-20">
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400 to-sky-500 sm:rounded-2xl shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-3"></div>
        <div class="relative bg-white sm:rounded-2xl px-4 py-10 sm:p-20 space-y-6">
          <div class="text-left text-2xl">
            <p>Une autre partie très importante du développement du jeu est la modélisation en 3D. La qualité de celle-ci change énormément le ressenti du jeu, 
              j'ai donc choisi un style graphique simpliste afin de limiter le temps dédié à la modélisation qui est très chronophage tout en gardant un bon ressenti.</p>
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
