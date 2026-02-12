
//import Category from "./Category.astro";

import Link from "next/link"
import Image from 'next/image';

//  <!-- FOOTER -->
//  <!-- <Category category='' /> --> 


export const Footer = () => {
  
  return (
<>
<div  style={{padding: '2rem 0rem'}} >
	<table align="center" >
		<tbody>
			<tr>
				<td className="ft-paragrapf" style={{background:'#007C89',borderRadius:'1rem'}}>
					<table className="row-content">
						<tbody>
							<tr>
								<td>
									<table>
										<tbody>
											<tr>
												<td>
													<div>
														<Link href="https://www.aster.cat/forms/nousoci" style={{color:'#ffffff', textDecoration:'none'}} className="mn-h1-article-title" target="_blank">Fes-te soci d'Aster
														</Link>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
</div>
<div>
	<table>
		<tbody>
			<tr>
				<td className="ft-paragrapf">
					<table className="row-content">
						<tbody>
							<tr>
								<td>
									<table>
										<tbody>
											<tr>
												<td  align="center">
													<div>
														<div className="ft1-div-img">
														<img src="https://www.aster.cat//images/codi-etic.jpg" className="ft1-img" width={61} height={46}
																alt="Aster, Agrupació Astronòmica de Barcelona, declarada Entitat d'utilitat pública segons resolució del Departament de Justícia de la Generalitat de Catalunya, número JUS/3230/2009 del 12/11/2009"
																title="Aster, Agrupació Astronòmica de Barcelona, declarada Entitat d'utilitat pública segons resolució del Departament de Justícia de la Generalitat de Catalunya, número JUS/3230/2009 del 12/11/2009"/>
														</div>
														<div className="ft2-div-p">
															<p className="ft2-pad">Aster, Agrupació Astronòmica de Barcelona, declarada Entitat
																	d'utilitat pública segons resolució del Departament de Justícia de la Generalitat de
																	Catalunya, número JUS/3230/2009 del 12/11/2009
															</p>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>

			<tr>
				<td style={{backgroundColor:'transparent', paddingTop:'0', paddingBottom:'0', paddingRight:'0', paddingLeft:'0'}} className="mceBlockContainer" valign="top">
					<table border={0} cellPadding="0" cellSpacing="0" width="100%" style={{backgroundColor:'transparent'}} role="presentation" data-block-id="7">
						<tbody>
							<tr>
								<td style={{minWidth: '100%', borderTop: '20px solid transparent'}} valign="top">
								</td>
							</tr>
						</tbody>
					</table>
				</td>
		</tr>
		<tr>
			<td style={{paddingTop: "12px", paddingBottom: "12px", paddingRight: "0", paddingLeft: "0"}} className="mceLayoutContainer" valign="top">
				<table align="center" border={0} cellPadding="0" cellSpacing="0" width="100%" role="presentation" data-block-id="16">
					<tbody>
						<tr className="mceRow">
							<td style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} valign="top">
								<table border={0} cellPadding="0" cellSpacing="24" width="100%" role="presentation">
									<tbody>
										<tr>
											<td style={{marginBottom: "24px"}} className="mceColumn" data-block-id="-10" valign="top" colSpan={12} width="100%">
												<table border={0} cellPadding="0" cellSpacing="0" width="100%" role="presentation">
													<tbody>
														<tr>
															<td align="center" valign="top">
																<table border={0} cellPadding="0" cellSpacing="0" width="" role="presentation" className="mceClusterLayout" data-block-id="-9">
																	<tbody>
																		<tr>
																		<td style={{paddingLeft: "24px", paddingTop: "0", paddingRight: "24px"}} data-breakpoint="7" valign="top" className="mobileClass-7">
																			<a href="https://facebook.com/asterbarcelona" style={{display: "block"}} target="_blank"  rel="noopener" data-block-id="-5">
																				<img width={40} height="auto" style={{border: 0, width: "40px", height: "auto", maxWidth: "100%", display: "block"}} alt="Facebook icon" src="https://emails.aster.cat/assets/social-buttons/facebook.png" className=""/>
																			</a>
																		</td>
																		<td style={{paddingLeft: "24px", paddingTop: "0", paddingRight: "24px"}} data-breakpoint="7" valign="top" className="mobileClass-7">
																			<a href="https://instagram.com/asterbarcelona" style={{display: "block"}} target="_blank"  rel="noopener" data-block-id="-6">
																				<img width={40} height="auto" style={{border: 0, width: "40px", height: "auto", maxWidth: "100%", display: "block"}} alt="Instagram icon" src="https://emails.aster.cat/assets/social-buttons/instagram.png" className=""/>
																			</a>
																		</td>
																		<td style={{paddingLeft: "24px", paddingTop: "0", paddingRight: "24px"}} data-breakpoint="7" valign="top" className="mobileClass-7">
																			<a href="https://x.com/asterbarcelona" style={{display: "block"}} target="_blank" rel="noopener" data-block-id="-7">
																				<img width={40} height="auto" style={{border: 0, width: "40px", height: "auto", maxWidth: "100%", display: "block"}} alt="Twitter icon" src="https://emails.aster.cat/assets/social-buttons/twitter.png" className=""/>
																			</a>
																		</td>
																		<td style={{paddingLeft: "24px", paddingTop: "0", paddingRight: "24px"}} data-breakpoint="7" valign="top" className="mobileClass-7">
																			<a href="https://www.aster.cat" style={{display: "block"}} target="_blank" rel="noopener" data-block-id="-8">
																				<img width={40} height="auto" style={{border: 0, width: "40px", height: "auto", maxWidth: "100%", display: "block"}} alt="Website icon" src="https://emails.aster.cat/data/a7f1d3c410e5bddc2e0756c64826495a63a20b21/media_files/4/original/web.png" className=""/>
																			</a>
																		</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
		<tr>
			<td style={{paddingTop: "8px", paddingBottom: "8px", paddingRight: "8px", paddingLeft: "8px"}} className="mceLayoutContainer" valign="top">
				<table align="center" border={0} cellPadding="0" cellSpacing="0" width="100%" role="presentation" data-block-id="11" id="section_5c8c5a208f90db0d2fd1b155272430c5" className="mceFooterSection">
					<tbody>	
						<tr className="mceRow">
						<td style={{backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} valign="top">
							<table border={0} cellPadding={0} cellSpacing={12} width="100%" role="presentation">
								<tbody>
									<tr>
										<td style={{paddingTop: 0, paddingBottom: 0, marginBottom: "12px"}} className="mceColumn" data-block-id="-3" valign="top" colSpan={12} width="100%">
											<table border={0} cellPadding="0" cellSpacing="0" width="100%" role="presentation">
												<tbody>
													<tr>
														<td style={{paddingTop: "12px", paddingBottom: "12px", paddingRight: "8px", paddingLeft: "8px"}} className="mceBlockContainer" align="center" valign="top">
															<div data-block-id="9" className="mceText" id="dataBlockId-9" style={{display: "inline-block", width: "100%"}}>
																<p className="last-child">
																	<em>Copyright © 2026 Aster, Agrupació Astronòmica de Barcelona, All rights reserved.</em><br /> 
																	Aquesta comunicació se li ha enviat a partir de les dades de contacte que vostè ha tingut l'amabilitat de facilitar-nos.<br /> <br /> 
																	<strong>La nostra adreça és:</strong><br /> 
																	Avinguda Tibidabo, 15<br /> 
																	08022 BARCELONA  <br /> <br /> 
																	Si ja no vols rebre correus d'Aster, <br /> 
																	<a href={"{{%20unsubscribe_url%20}}"}>pots donat-te de baixa aquí
																	</a><br />
																</p>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>

		</tbody>
	</table>
</div>

</>
	)
}