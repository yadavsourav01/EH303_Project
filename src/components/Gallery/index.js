import {Component} from 'react'

import ThumbnailItem from '../ThumbnailItem'

import './index.css'

const imagesList = [
  {
    id: 0,
    imageUrl: 'https://i.ibb.co/2qYCjTG/image.png',
    thumbnailUrl: 'https://i.ibb.co/Bq2cBnc/image.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
    imgText: 'ANORTHOSITE WHITE',
    colorIndex:
      'Leucocratic (>90% are light-coloured minerals) a high proportion of plagioclase feldspar. White or light grey in colour',

    mineralComp:
      'Essential : Plagioclase feldspar (light coloured feldspar laths; typically labradorite). Accessory : Clinopyroxene (diopside and augite), orthopyroxene (hypersthene), ilmenite, magnetite, apatite, zircon.',

    texture:
      'Crystallinity : Holocrystalline. Granularity : Medium-grained to coarse-grained. Phaneritic texture. Shape of grains : Subhedral, hypidiomorphic.Mutual relationship : Commonly equigranular texture. Appears as a densely homogeneous rock, often shows fairly the same texture and composition throughout the rock mass. Other textures : Sometimes shows porphyritic texture with plagioclase phenocrysts.',
    diagnostic:
      'Grain size, equigranular texture. Dominance of plagioclase feldspar.',

    inference: 'ANORTHOSITE WHITE',
    occurence:
      'Common rock type in the lower crust. Also found in lunar highlands and some terrestrial impact craters.',
    impUses:
      'Used as a decorative and building stone. Also used in the manufacture of refractory products and as an abrasive.',
    indianOcc: 'Tamil Nadu (Kodaikanal), Rajasthan (Siwalik Range).',
  },

  {
    id: 1,
    imageUrl: 'https://i.ibb.co/rpzNFL5/image.png',
    thumbnailUrl: 'https://i.ibb.co/KNLFCnM/image.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
    imgText: 'BIOTITE SCHIST',
    colorIndex:
      'Melanocratic (>50% are dark coloured minerals) high proportion of biotite. Dark green, black, or dark brown in colour. ',

    mineralComp:
      'Essential : Biotite (dark coloured mica flakes), quartz, feldspar (plagioclase or microcline), muscovite (light coloured mica flakes). Accessory : Garnet, staurolite, kyanite, sillimanite, amphibole, pyrite.',

    texture:
      'Crystallinity : Holocrystalline. Foliation : Strong planar fabric (schistosity) due to alignment of biotite flakes. Shape of grains : Flaky, elongated, platy. Mutual relationship : The elongated biotite flakes are aligned parallel to each other, creating a planar fabric (schistosity). Quartz and feldspar grains are often present as elongated or stretched grains. Other textures : May show porphyroblastic texture with garnet or staurolite crystals.',

    diagnostic:
      'Schistosity due to alignment of biotiteflakes. Presence of elongated quartz and feldspar grains.',

    inference: 'BIOTITE SCHIST',
    occurence:
      'Metamorphic rocks formed from shale,mudstone or volcanic rocks. Often found in regional metamorphic terranes.',
    impUses:
      'Used as a decorative and building stone. Also used in the manufacture of refractory products and as an abrasive.',
    indianOcc: 'Bihar, Orissa, Karnataka, Tamil Nadu, Rajasthan.',
  },

  {
    id: 2,
    imageUrl: 'https://i.ibb.co/jbqFJXT/image.png',
    thumbnailUrl: 'https://i.ibb.co/jbqFJXT/image.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
    imgText: 'BRECCIA',
    colorIndex:
      'Polymictic breccias can be of any colour, monomictic breccias typically have a uniform colour. Depends on the rock fragments present in the breccia',

    mineralComp:
      'Essential : Angular to subangular rock fragments (called clasts) set in a matrix of finer-grained material. Accessory : Quartz, feldspar, mica, calcite, pyrite, and other minerals present in the clasts or matrix.',

    texture:
      'Crystallinity : May be crystalline, partially crystalline, or non-crystalline. Grain size : Variable, dependent on the size of the clasts present in the breccia. Shape of grains : Angular to subangular clasts set in a matrix of finer-grained material. Mutual relationship : Clasts may be randomly oriented, or may exhibit preferred orientation or alignment. Other textures : May show depositional structures such as cross-bedding or stratification.',

    diagnostic:
      'Angular to subangular clasts set in a matrix of finer-grained material.',

    inference: 'BRECCIA',
    occurence:
      'Formed from the accumulation of broken rock fragments, often in fault zones, volcanic environments, or as a result of sedimentary processes.',
    impUses: 'Used as a decorative stone  for building construction.',
    indianOcc:
      'Breccia deposits are found in various partsof India, including the Aravalli range in Rajasthan and in the Deccan Traps of western India.',
  },
  {
    id: 3,
    imageUrl: 'https://i.ibb.co/LJQfqgK/image.png',
    thumbnailUrl: 'https://i.ibb.co/LJQfqgK/image.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
    imgText: 'CHLORITE SCHIST',
    colorIndex: 'Grey-Green',
    mineralComp:
      'Essential : Chlorite, Biotite , Accessory: Quartz, feldspar, mica and Granet',

    texture:
      'Crystallinity: Medium degree of Crystallinity, Granularity: Medium grain, Shape of grains: small elongated platy crystal, Mutual relationship: Platy texture has flat thin sheet layer. Texture of this is often described as silky or greasy. Other texture:  foilated texture, has greenish-grey colour composed of platy crystal of cholrite arranged in thin layer. Flaky, scaly texture',
    diagnostic:
      'schistose texture means it has layered appearance. It may appear glossy or shiny due to presence of mica mineral, it is typically green in colour due to the presence of chlorite minerals.',

    inference: 'Chlorite Schist',
    occurence:
      'It may found in subduction zone undergo metamorphism. It also occur when hot magma intrudes into pre-existing rocks, regional metamophism.',
    impUses: 'Use in geological research, it has healing properties.',
    indianOcc:
      'found in Himalayan region, also occurse in Eastern Ghats in Andhra Pradesh, Odisha, Tamil Nadu. Aravalli Range, Satpura Range',
  },
  {
    id: 4,
    imageUrl: 'https://i.ibb.co/tY1L6HS/image.png',
    thumbnailUrl: 'https://i.ibb.co/tY1L6HS/image.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
    imgText: 'COAL BITUMINOUS',
    colorIndex: 'Dark Black',
    mineralComp:
      'Essential:- Quartz, Pyrite, Calcite, Dolomite, Accessory:- Kaolinite, illite, smectite',

    texture:
      'Crystallinity:- Hemicrystalline, Granularity:- small size grain, Mutual Realationship:- minerals like calcite or pyrite act as cementing agents binding coal grains togeth, typically contains quartz, clay minerals which contribute to the coals ash content. Other texture:- texture of bituminous is influenced by wide factors like thermal history, presence of mineral matter. Laminated texture, some are more glassy or crystalline in appearance.',
    diagnostic:
      ' It has higher volatile matter content, it contain varying amounts of sulfur, grains are loosely packed together, it has shiny or dull appearance depending on coals degree of metamorphism.',

    inference: 'Bituminous coal',
    occurence:
      'Found in layers or seams interspersed with layers of sedimentary rocks, formation is closely linked to the deposition of organic rich sediments such as peat or swamp.',
    impUses: 'electricity generation, steel production, industrial fuel',
    indianOcc:
      'Haria coalfield in Jharkhand, West Bengal, Singrauli coalfied in MP',
  },
  {
    id: 5,
    imageUrl: 'https://i.ibb.co/5vHr1WG/image.png',
    thumbnailUrl: 'https://i.ibb.co/5vHr1WG/image.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
    imgText: 'R6',
  },
  {
    id: 6,
    imageUrl: 'https://i.ibb.co/Ht3N3kX/image.png',
    thumbnailUrl: 'https://i.ibb.co/Ht3N3kX/image.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
    imgText: 'GRANITE SINGHBHUM',
    colorIndex: ' Pinkish-grey colour',
    mineralComp:
      'Essential : Quartz (20-60%), Feldspar (40-60%), Mica and Accessory : biotite, muscovite, andalbite',

    texture:
      'Crystallinity :  holocrystalline, Granularity :  Coarse grain igneous rock with visible mineral grains, and Shape of grains : grains of quartz ',
    diagnostic:
      ' sedimentary facies namely, geometry, lithology (grain size), sedimentary structures, paleocurrent patterns and fossils',

    inference: 'Older Metamorphic Tonalite Gneiss',
    occurence:
      'associated with continental flood basalts, large plutons or batholiths',
    impUses: 'decorative features, building construction, kitchen countertops',
    indianOcc:
      'Gua to near Tensa in Bonai (Odisha), Jalore granite (Rajasthan)',
  },
  {
    id: 7,
    imageUrl: 'https://i.ibb.co/BC6sS0d/image.png',
    thumbnailUrl: 'https://i.ibb.co/BC6sS0d/image.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
    imgText: 'GRAPHIC GRANITE',
  },
  {
    id: 8,
    imageUrl: 'https://i.ibb.co/XJ921Yc/image.png',
    thumbnailUrl: 'https://i.ibb.co/XJ921Yc/image.png',
    imageAltText: 'nature river1',
    thumbnailAltText: 'nature river thumbnail1',
    imgText: 'LAMPROPHYRE',
  },
  {
    id: 9,
    imageUrl: 'https://i.ibb.co/tYhNsWV/image.png',
    thumbnailUrl: 'https://i.ibb.co/tYhNsWV/image.png',
    imageAltText: 'nature river2',
    thumbnailAltText: 'nature river thumbnail2',
    imgText: 'SCHIST',
  },
  {
    id: 10,
    imageUrl: 'https://i.ibb.co/CQjytBT/image.png',
    thumbnailUrl: 'https://i.ibb.co/CQjytBT/image.png',
    imageAltText: 'nature river3',
    thumbnailAltText: 'nature river thumbnail3',
    imgText: 'NORITE',
  },
  {
    id: 11,
    imageUrl: 'https://i.ibb.co/rH1k9J0/image.png',
    thumbnailUrl: 'https://i.ibb.co/rH1k9J0/image.png',
    imageAltText: 'nature river2',
    thumbnailAltText: 'nature river thumbnail2',
    imgText: 'SHALE WITH BARAKAR FOSSILS',
  },
  {
    id: 12,
    imageUrl: 'https://i.ibb.co/P5FvVQ1/image.png',
    thumbnailUrl: 'https://i.ibb.co/P5FvVQ1/image.png',
    imageAltText: 'nature river2',
    thumbnailAltText: 'nature river thumbnail2',
    imgText: 'QUARTZITE REDDISH',
  },
  {
    id: 13,
    imageUrl: 'https://i.ibb.co/LxxJxRm/image.png',
    thumbnailUrl: 'https://i.ibb.co/LxxJxRm/image.png',
    imageAltText: 'nature river2',
    thumbnailAltText: 'nature river thumbnail2',
    imgText: 'RHYOLITE',
  },
  {
    id: 14,
    imageUrl: 'https://i.ibb.co/ZfZ4PTz/image.png',
    thumbnailUrl: 'https://i.ibb.co/ZfZ4PTz/image.png',
    imageAltText: 'nature river2',
    thumbnailAltText: 'nature river thumbnail2',
    imgText: 'GARNET MICA SCHIST',
  },
  {
    id: 15,
    imageUrl: 'https://i.ibb.co/hmwtc6n/image.png',
    thumbnailUrl: 'https://i.ibb.co/hmwtc6n/image.png',
    imageAltText: 'nature river2',
    thumbnailAltText: 'nature river thumbnail2',
    imgText: 'AMPHIBOLITE',
  },
  {
    id: 16,
    imageUrl: 'https://i.ibb.co/YB1Y9x6/image.png',
    thumbnailUrl: 'https://i.ibb.co/YB1Y9x6/image.png',
    imageAltText: 'nature river2',
    thumbnailAltText: 'nature river thumbnail2',
    imgText: 'FOSSILIFEROUS LIMESTONE',
  },
  {
    id: 17,
    imageUrl: 'https://i.ibb.co/ft8nk3J/image.png',
    thumbnailUrl: 'https://i.ibb.co/ft8nk3J/image.pngg',
    imageAltText: 'nature river2',
    thumbnailAltText: 'nature river thumbnail2',
    imgText: 'SANDSTONE',
  },
  {
    id: 18,
    imageUrl: 'https://i.ibb.co/w4WBqSY/image.png',
    thumbnailUrl: 'https://i.ibb.co/w4WBqSY/image.png',
    imageAltText: 'nature river2',
    thumbnailAltText: 'nature river thumbnail2',
    imgText: 'HORNFELS',
  },
  {
    id: 19,
    imageUrl: 'https://i.ibb.co/gWRKRCH/image.png',
    thumbnailUrl: 'https://i.ibb.co/gWRKRCH/image.png',
    imageAltText: 'nature river2',
    thumbnailAltText: 'nature river thumbnail2',
    imgText: 'GRAVEL',
  },
]

class Gallery extends Component {
  state = {
    activeThumbnailId: imagesList[0].id,
  }

  setActiveThumbnailId = id => {
    this.setState({
      activeThumbnailId: id,
    })
  }

  render() {
    const {activeThumbnailId} = this.state
    const {
      imageUrl,
      imageAltText,
      imgText,
      colorIndex,
      mineralComp,
      texture,
      diagnostic,
      inference,
      occurence,
      impUses,
      indianOcc,
    } = imagesList[activeThumbnailId]

    return (
      <div className="app-container">
        <div className="gallery-container">
          <h1 className="ma-head"> Rocks Analysis</h1>
          <div className="main-card">
            <div>
              <h1 className="heading"> MEGASCOPIC STUDY OF ROCKS</h1>
              <h1>Properties</h1>

              <table>
                <tr>
                  <th>Properties</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>Colour Index</td>
                  <td>{colorIndex}</td>
                </tr>
                <tr>
                  <td>Mineral Composition</td>
                  <td>{mineralComp}</td>
                </tr>
                <tr>
                  <td>Texture</td>
                  <td>{texture}</td>
                </tr>
                <tr>
                  <td>Diagnostic Characters</td>
                  <td>{diagnostic}</td>
                </tr>
                <tr>
                  <td>Inference/Name</td>
                  <td> {inference} </td>
                </tr>
                <tr>
                  <td>Mode of Occurrence</td>
                  <td>{occurence}</td>
                </tr>
                <tr>
                  <td>Important Uses</td>
                  <td>{impUses}</td>
                </tr>
                <tr>
                  <td>Indian Occurrences</td>
                  <td>{indianOcc}</td>
                </tr>
              </table>
            </div>
            <div className="final-div">
              <img
                src={imageUrl}
                className="selected-image"
                alt={imageAltText}
              />
              <p className="phot-img">{imgText}</p>
            </div>
          </div>

          <p className="description">
            We will use the following characters (Table 3.1) to identify rocks
            in hand specimen or megascopically.
          </p>
          <ul className="thumbnails-list">
            {imagesList.map(eachImage => (
              <ThumbnailItem
                key={eachImage.id}
                imageDetails={eachImage}
                isActive={activeThumbnailId === eachImage.id}
                setActiveThumbnailId={this.setActiveThumbnailId}
              />
            ))}
          </ul>
          <div>
            <p className="last-line">
              The copyright &copy; 2023-2026 by Sourav, Agam and Vishal
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
