function aboutCFN() {
	$('.about-cfn').find('h4').textillate({
		in: {
			effect: 'bounceIn',
			sync: true,
			callback: function () {
				$('.about-cfn').find('em').textillate({ in: {
						effect: 'bounceIn',
						sync: false,
						callback: function () {
							$('.mission').find('h4').textillate({ in: {
									effect: 'bounceIn',
									sync: true,
									callback: function () {
										$('.mission').find('em').textillate({ in: {
												effect: 'bounceIn',
												sync: false,
												callback: function () {
													$('.research-areas').find('h4').textillate({ in: {
															effect: 'bounceIn',
															sync: true,
															callback: function () {
																$('.research-areas').find('a:eq(0)').textillate({ in: {
																		effect: 'bounceIn',
																		sync: false,
																		callback: function () {
																			$('.research-areas').find('a:eq(1)').textillate({ in: {
																					effect: 'bounceIn',
																					sync: false,
																					callback: function () {
																						$('.research-areas').find('a:eq(2)').textillate({ in: {
																								effect: 'bounceIn',
																								sync: false,
																								callback: function () {
																									$('.research-areas').find('a:eq(3)').textillate({ in: {
																											effect: 'bounceIn',
																											sync: false,
																											callback: function () {
																												$('.research-areas').find('a:eq(4)').textillate({ in: {
																														effect: 'bounceIn',
																														sync: false,
																														callback: function () {
																															$('.research-areas').find('a:eq(5)').textillate({ in: {
																																	effect: 'bounceIn',
																																	sync: false,
																															
																																}
																															});
																														}
																													}
																												});
																											}
																										}
																									});
																								}
																							}
																						});
																					}
																				}
																			});

																		}
																	}
																});
															}
														}
													});
												}

											}
										})
									}
								}
							});
						}
					}
				});
			}
		}
	});
}

$(aboutCFN());
