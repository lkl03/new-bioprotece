import React, { useState, useEffect } from 'react'
import {
    ItemS,
    TitleItem,
    ContentItem,
    ItemImg,
    ImageDiv,
} from '../../../styles/StyledItems'
import ScrollArrow from '../../../components/Generales/ScrollArrow'
import Pdf from '../../../components/Generales/pdf'
import NavProd from '../../../components/Navbar/NavProd'
import Redirecter from '../../../components/Redirecter'



const CanuladoFresada = () => {

    
useEffect(() => {
    let details = [...document.querySelectorAll('details')];
    document.addEventListener('click', function(e) {
      if (!details.some(f => f.contains(e.target))) {
        details.forEach(f => f.removeAttribute('open'));
      } else {
        details.forEach(f => !f.contains(e.target) ? f.removeAttribute('open') : '');
      }
    })
}, [])

    const titulo = 'Tornillo canulado Ø6.5';
    const img = 'canulados-6_5';

    const close = (id) => {
        for (let i = 0; i < arr.length; i++) {
            let detail = document.getElementsByTagName("details")
            console.log(arr[i].id, id)

            if (detail[i].open === "true") {
                detail[i].open = true
            } else if (detail[i].open === "false"){
                detail[i].open = false
            } else if (arr[i].id !== id) {
                detail[i].open = false
            }
        }
    }


    return (
        <>
            <Redirecter category="Tornillos canulados" product="Tornillo Canulado Ø6.5" />
            <NavProd />
            <ItemS>
                <TitleItem className="title-item">{titulo}</TitleItem>
                <ContentItem>
                    <ImageDiv className="image-div">
                        <ItemImg src={`/img/items/tornillos-canulados/${img}.webp`} alt={`${titulo} Bioprotece`} className="item-img" data-aos="fade-right" />
                    </ImageDiv>
                    <div class="info-div multitables">

                        <details open>
                            <summary class="firstsum">Canulado Ø6.5 radio 16mm</summary>

                            <table class="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Descripción</th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">60-100</td>
                                        <td class="text-left">Ø6.5 largo 30mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-101</td>
                                        <td class="text-left">Ø6.5 largo 35mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-102</td>
                                        <td class="text-left">Ø6.5 largo 40mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-103</td>
                                        <td class="text-left">Ø6.5 largo 45mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-104</td>
                                        <td class="text-left">Ø6.5 largo 50mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-105</td>
                                        <td class="text-left">Ø6.5 largo 55mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-106</td>
                                        <td class="text-left">Ø6.5 largo 60mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-107</td>
                                        <td class="text-left">Ø6.5 largo 65mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-108</td>
                                        <td class="text-left">Ø6.5 largo 70mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-109</td>
                                        <td class="text-left">Ø6.5 largo 75mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-110</td>
                                        <td class="text-left">Ø6.5 largo 80mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-111</td>
                                        <td class="text-left">Ø6.5 largo 85mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-112</td>
                                        <td class="text-left">Ø6.5 largo 90mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-113</td>
                                        <td class="text-left">Ø6.5 largo 95mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-114</td>
                                        <td class="text-left">Ø6.5 largo 100mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-115</td>
                                        <td class="text-left">Ø6.5 largo 105mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-116</td>
                                        <td class="text-left">Ø6.5 largo 110mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-117</td>
                                        <td class="text-left">Ø6.5 largo 115mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-118</td>
                                        <td class="text-left">Ø6.5 largo 120mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                        <details>
                            <summary class="firstsum">Canulado Ø6.5 radio 32mm</summary>

                            <table class="tabla-chica mini">
                                <thead>
                                    <tr>
                                        <th class="text-left">Código</th>
                                        <th class="text-left">Descripción</th>
                                        <th class="text-left">Material</th>
                                    </tr>
                                </thead>
                                <tbody class="table-hover">
                                    <tr>
                                        <td class="text-left code">60-119</td>
                                        <td class="text-left">Ø6.5 largo 35mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-120</td>
                                        <td class="text-left">Ø6.5 largo 40mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-121</td>
                                        <td class="text-left">Ø6.5 largo 45mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-122</td>
                                        <td class="text-left">Ø6.5 largo 50mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-123</td>
                                        <td class="text-left">Ø6.5 largo 55mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-124</td>
                                        <td class="text-left">Ø6.5 largo 60mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-125</td>
                                        <td class="text-left">Ø6.5 largo 65mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-126</td>
                                        <td class="text-left">Ø6.5 largo 70mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-127</td>
                                        <td class="text-left">Ø6.5 largo 75mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-128</td>
                                        <td class="text-left">Ø6.5 largo 80mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-129</td>
                                        <td class="text-left">Ø6.5 largo 85mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-130</td>
                                        <td class="text-left">Ø6.5 largo 90mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-131</td>
                                        <td class="text-left">Ø6.5 largo 95mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-132</td>
                                        <td class="text-left">Ø6.5 largo 100mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-133</td>
                                        <td class="text-left">Ø6.5 largo 105mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-134</td>
                                        <td class="text-left">Ø6.5 largo 110mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-135</td>
                                        <td class="text-left">Ø6.5 largo 115mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>
                                    <tr>
                                        <td class="text-left code">60-136</td>
                                        <td class="text-left">Ø6.5 largo 120mm</td>
                                        <td class="text-left">Titanio</td>
                                    </tr>

                                </tbody>
                            </table>
                        </details>

                    </div>
                    <Pdf path='https://drive.google.com/file/d/1sNyVc0pgCtXV35PmnivPNdc7Uae79GiA/view?usp=sharing' />
                </ContentItem>

                <ScrollArrow />
            </ItemS>

        </>
    )
}

export default CanuladoFresada