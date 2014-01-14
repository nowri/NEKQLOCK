//NEKQLOCK v1.13

var VERSION = 1.13,
	FILTERS = [
		"194AMb3",
		"1hy9EFj",
		"Mf4ZD9tN9thio",
		"ziVtW9Laffnd6",
		"EkGwHI8Xe1h5e",
		"rCCgjtRsd6r72",
		"iRx1alfjgrK5a",
		"MAMvxv85iHEUE",
		"izlFJC3dRKWFG",
		"UVrOxZW0YxWqk",
		"2QlQTXw3XleYo",
		"s9KmJX7Rn868E",
		"3aWQs44QcNqIU",
		"pxqUrTxjGsAOQ",
		"7Jrz5kRxqwR5S",
		"2XDvEe9VLv1wA",
		"L2djWse2JlucU",
		"JUIhkaMT2j5WU",
		"clQXHFFBegxoI",
		"iU1NUdMq3sx3O",
		"aeGl0oWfiIyJO",
		"hnxYKXpHV9ggU",
		"LgxuiRrpJX8Iw",
		"iBi5RUxOkrauI",
		"n2VBomYiGDtXq",
		"l3T90yJFTDKsE",
		"qoSS6IpHmFL9u",
		"jFNTzpnwahSwg",
		"WmjiOoGpuCDq8",
		"tid0uMdWMTBh6",
		"10v5aHuvJTP4ZO",
		"v8VIXwWMA2Ta8",
		"noozjpLkYrQmQ",
		"9SudEOFhymdy0",
		"ATZOX95dnrJPW",
		"75nmj6IqzXe2Q",
		"jar7dDQE4stnq",
		"tCBR30h50Ine0",
		"FyGHRHcD3RzCo",
		"N0KdOowDev1AY",
		"4L7Q2eAKjd2wM",
		"ktvFa67wmjDEI",
		"Pgb4zlVQqnUB2",
		"nB4XUygbsw4eI",
		"GmXMpIy7yhlD2",
		"7SAK61UBQXoXe",
		"Kx4ot63rdyA9y",
		"j1zuL4htGTFQY",
		"11RlYHiGTQgRwc",
		"2lnLUJbP1Qg5W",
		"upJzCIWvSaBbi",
		"KeABNFoNacLf2",
		"QG2bT1r0cDC6I",
		"OhEWDytX1xcg8",
		"xvjwcmgHJO0la",
		"14wdZyNW1V5EJO",
		"zptaSMcY9qeas",
		"zsp6JrZQf3rPy",
		"soyTdHDZdnBvO",
		"OTW0IQNJiLa2k",
		"Md053RIVMG3Re",
		"13Qumr2SLqrl5e",
		"uxJyC2Oh6FzB6",
		"FNV0057TRQ0ow",
		"E8JQD4SxLh6Wk",
		"8l98VVUTKPhbG",
		"ubW3cmFWv4vba",
		"sbxbdNiIKHFyo",
		"InG7YDwadoTQY",
		"nbu1qZq47RQVq",
		"8WdE62Kgbj5m0",
		"EEh8yn2kJGJ1e",
		"XyoN90AmTdshG",
		"M4pNF6rNo0Oti",
		"DZ9GJsNnOfJy8",
		"Yqprl68aTohCo",
		"v926POcrDNBss",
		"ihyeEAiwSVHdm",
		"H3i0hdJ8AD0SA",
		"6I2SpXub9wChq",
		"3wim5p91hEs4E",
		"VigQh9POi5B60",
		"VuDjPypv6aem4",
		"fWrorpy7Jrlvi",
		"RT9f2nfNNRXeE",
		"m88acMbEoDneU",
		"2I3YdIANfkV7W",
		"HGyncAYumiU4o",
		"5fHY45L9XLzcQ",
		"Wr8ixpa7PxNks",
		"pNZizv6pNwe7C",
		"GYx3rLjdBPfyM",
		"nsIZ8Um8WteU0",
		"KFhABeW9s5a7K",
		"6Wtgh9nFC4FB6",
		"7iizPhPPgxJHa",
		"Shw9v8IUyhLQk",
		"WFEGOIIrj6SY0",
		"pySbfEhtzXNSM",
		"F8rZBFylC2W1G",
		"Lnv2VohQZinYs",
		"DoP0rJK6czKTe",
		"xXHSEiyZcYyrK",
		"rcCy27MbBTM2c",
		"ZfWIsRBCLitpu",
		"5lrvYTf5kdayA",
		"aZVJ5i5Q7n5Li",
		"aQvak4Df3mxl6",
		"6qPqvhkfaftUQ",
		"GXQHdYnB6ujK0",
		"gjzT8rTaz3piE",
		"f0LHOTAdTmZe8",
		"xggZ668d3GJFu",
		"vCo4upzxCqlck",
		"NKvTMKHLCmpBm",
		"x7gybOmE9zBmw",
		"74hxSB8JCnxwQ",
		"ZFjX21S1OLHZ6",
		"VUOklKult9fKU",
		"13s9NduSU78SXK",
		"13ZdCgJUGEm6fS",
		"yKtesoybuHb8Y",
		"IZWsiCeB6pKAo",
		"Je1Jzd74eH5Qc",
		"he9CUN5hnzJ1m",
		"123adIfM99f85O",
		"tb6rjSaBc02m4",
		"mGWzLLY4mQ7K0",
		"11pM62aqllDgEo",
		"TLiUGqF5uAg1y",
		"KmSHPvW1o3r1e",
		"142hkbbJoG14zu",
		"jt5PEdaS3LiIo",
		"eQo5OrCOA440g",
		"izlFJC3dRKWFG",
		"rCCgjtRsd6r72",
		"niOs1ho8hvBEA",
		"BOrpdyK06AXCw",
		"5HqiLOVRpmzF6",
		"MAMvxv85iHEUE",
		"AyUZMrA3qy0OQ",
		"kooPUWvhaGe7C",
		"UohqyZa50MF2",
		"M6Mpz4uhJIXhC",
		"2zUMoP8P3kI6I",
		"2cyjWYLBr2pws",
		"VR1TSXYGfy07K",
		"mqMC55vxfk0U",
		"eosfVUIhVWYuI",
		"1YffMQ34XrbrO",
		"nd05ymVUOwHgk",
		"Q12RnyI0CuY2A",
		"fswc4Pgi789Pi",
		"WHvptFqAtEX4c",
		"2QHLYZFJgjsFq",
		"BQit38CxW55NS",
		"CQhh1dUteByN2",
		"90iM3Asf9wMU0",
		"dhrC2bXw96hJS",
		"idFIFESe2itpK",
		"edJJXAzQkxHoc",
		"OXpeuh0ysJ51m",
		"bJD3wyYYJ3C4U",
		"bftrwFOK5haIE",
		"zvG8YmbAaOVfG",
		"yoYsTzYn0VN5K",
		"O1JvokpfC6dy0",
		"ODmg4l7MexIdi",
		"p1Tb4FEuO9YmA",
		"KZFyx0r4FjWbS",
		"RmuVTjiUKJy00",
		"Z6NW9TvK1HcQ",
		"S5L3GphWmnSco",
		"M1Gaui2DJPd84",
		"FxwZvEptGOicw",
		"QsVpuAxcznoyI",
		"lX7k5T6CNYi9q",
		"GB6UYNtzn5XuE",
		"c3pfTBYg6Zxv2",
		"kacOAeKR7onkY",
		"tmSBN9eR8k17a",
		"M0CIzLZSbR6N2",
		"RZgYbRqGo2AGk",
		"f2zVjZoBmj35m",
		"p8vfEUeyg4Cdy",
		"hMOUzHtFPtsru",
		"w5RNPqQXB6JHy",
		"wSjyCTaomBpe0",
		"oDMUXymNzCUYU",
		"fy5iARUXimtVK",
		"TryvaBr2OOFAk",
		"DEH6IGLHAa9LG",
		"11TZGKPOHX28aQ",
		"S1uefuKDztJmg",
		"rTI7z52gVCoGk",
		"m2g0hZTVlCNB6",
		"d6M3VYh9wcP1S",
		"bjDq7WCjstuPS",
		"P7eCVhhWey6Yg",
		"fXZ2xIvmSGC5y",
		"LsmC4Yx6JG240",
		"IOidtBkTeNPSE",
		"6uIjKUlHGcmv6",
		"BWdv4Mr4KGuE8",
		"FC3wFYmSY73Qk",
		"gHcJdWyJX5Zja",
		"45ss9liFF7iz6",
		"xcRw92jJZ0NCo",
		"gnzQg5EytGiwU",
		"7LYYbCBjIy0ms",
		"WkegPJK8yrfTG",
		"ebpKzbxq8WhmU",
		"ifihiBf2C6oa4",
		"ja3VhrHfhjR1m",
		"dhrC2bXw96hJS",
		"GUTSVn92nBxUA",
		"k7DU4ZczEe1jO",
		"J3GfCrB2xLkaI",
		"b5E5nbW5RiVVK",
		"5HSYaZTcRpYnS",
		"3BcW3nvgzZPDW",
		"TynNPPhvRO7du",
		"EU6IOl9fXYqwE",
		"2B9eJW9D3vHjy",
		"DM1lpB78is1Lq",
		"10rfoPpKDsGYes",
		"13NILYLVr0lUL6",
		"11dIPSbkMyqW1a",
		"11XDsRZuNhTZMQ",
		"126497rphuyae4",
		"11xAW2Z7cHxPnW",
		"125gKDWq9THk52",
		"12mVevBWLCuKQw",
		"8Nhu68i91YxAQ",
		"1Dijze4ok9bbO",
		"2tFL03pKsX1te",
		"AVXSDAjFZNdbW",
		"XA9FtV39XtKmc",
		"iOIMS3SAGcyUE",
		"72yJtuIRBsVq",
		"gxoBVvkwqotd6",
		"td2XHDGjpDDLa",
		"SgT5lD2YGUkGA",
		"qP2XRaF8ZsKcM",
		"p2Q1vgWtZ3xwA",
		"fE7gwNzSHV7mE",
		"wUCWABmVAnSYU",
		"DlXifsxB2gbra",
		"rQ3AGjQBhjYA0",
		"13BOIC4nX0FUt2",
		"fQx2YjtlZzEPK",
		"1OvjRh54uEVy0",
		"MhTjxYd7vq0TK",
		"y56Wc66KHng08",
		"QutdNosJtO19K",
		"E5WN8oLUrpIzK",
		"ouJSOtGECNQ9G",
		"qSxL0SCUsOnsI",
		"kQvyCMS08izkI",
		"2KUuUqxd6tkeQ",
		"11i7RuOORxP7iM",
		"1k9jPVM2tmFkA",
		"6ax2FAaXZaXqE",
		"HisurG53GjdIY",
		"sIfLhexLUqwik",
		"rDbkCB7zCihgI",
		"rgyFVwgTNdMTC",
		"PMhrETd5GKjGU",
		"12Ut92jQhC1yrS",
		"xsSLsBKsxpHaw",
		"t8Tx4fXHytvqw",
		"c9nk8cKBzJS24",
		"aS7KyoTQjx7XO",
		"O31hpz2OvDJbG",
		"zYQyUBXhM9RhS",
		"eDmRs2m9O6g5W",
		"nwh64eFx0An2E",
		"6eji14vMYceDS",
		"Lv5dVNQKvK8M0",
		"13d0eusgiWVnNK",
		"z9vfsBStvS9lC",
		"ESJ5JgFPg494A",
		"Eb4vJm7mtq1ZS",
		"YGkTgUZeRuCmQ",
		"MMBWPccDmxvxe",
		"pjxm8gMP7yC9W",
		"ZNdiA45SihyTe",
		"T9KECnZIH7KDu",
		"MFgfu9IDNC1uU",
		"8ZiizYZaKT1MQ",
		"IeYbtxbyNyrU4",
		"guWBpsFio4Dx6",
		"K5VuuYAGS6wHC",
		"exw6t10TEDJ1C",
		"zbfxuU9y6jnws",
		"KDqmlSzFbzri0",
		"B51EAJ0Frooq4",
		"ojMnTBszYbtcs",
		"JOlzZLKGa1XA4",
		"a6IiR3XLJcxUs",
		"SKfxAmcCza9fq",
		"ZoVOZ40r1C4Le",
		"JGKTjUeGL43Re",
		"t8nuTYcjC8MLu",
		"M8MntOKMLcgnu",
		"9kQIJYRnH8Ri0",
		"9j4h3ZoEZHZS0",
		"yNnkxow6Ainba",
		"owlukX85rXq3C",
		"128gazBxg79gEE",
		"qk4HPGEhjmTw4",
		"lLqgbN0VykTCg",
		"2LBBNpnELKlos",
		"jArVJytQwm2g8",
		"u8pmLqLSmtI3u",
		"mOvxjHIwi3Qru",
		"6bWthysbD36Ja",
		"BtYCR0xXkf41a",
		"14bYauF9VvaOkw",
		"S9pZty1yP8X4I",
		"CHhCDxT4tRZSg",
		"soz1hQ75jPyrS",
		"JkvaPtZtgqmuk",
		"jrYaRQv20zzgI",
		"YvrcYh8Cge2ru",
		"KJ4CeGm6vOJhe",
		"E8clU9GASeVMc",
		"UgzuiAlBRjpOE",
		"dHcOTaIIHSVDG",
		"6jSBFTN1pgksU",
		"xVQF5x2OIhxqU",
		"9qJ5tQIct2bzq",
		"Is1FUyGlAaxMc",
		"4QQgNe40CvCNy",
		"caRzbq7nd1zfG",
		"Zzcz1NDgwVtte",
		"fOmcMBx8OdBVC",
		"b0ZzSOrTEBOVO",
		"oGflogtpiz5UQ",
		"N4j9iJUe0nHyg",
		"SNCRDYLCU5rGg",
		"GnbH3HSPJdEKQ",
		"Ec9pMRl7wKauA",
		"5xhNfZNvyIyEE",
		"ozRpv8z9DBoIg",
		"eNurHTA2eBTSo",
		"xfs1gBmK2VoJy",
		"4ICo9KifmmVjO",
		"jqOjIk1mFYdYk",
		"93Ahu3u1KCs8g",
		"DYuwUF0RXtFny",
		"S8308Fo4Fp5K",
		"yJOwFfquCS2cw",
		"wokOgzF3hQZy0",
		"qCztKRwhESbja",
		"CrrvlQWUhQtj2",
		"gRRoCcZuK7xm0",
		"RxvZjYug3rCPS",
		"cVrEi2HSVTPqg",
		"DJui9CAXFEgZa",
		"PrHzcVpYfgtMY",
		"oAIzCKJEtQk12",
		"OIxSgdOxLYBTG",
		"SR0x5YlQPq4wg",
		"PDYMjNuxpLmYE",
		"tVOYrItGgy7F6",
		"jGw0rW2iHZR0A",
		"KN20zAHFCEc0g",
		"rbcXe6TI1LUpW",
		"QowCDuNqQFc7C",
		"YZLD6EcLmptfO",
		"kW4ZHrKS9p8k0",
		"ufQsWK7jvGu2c",
		"p2BUA5lTw4Jaw",
		"f9vsEmv4NA9ry",
		"HCuv0T4T8AMtW",
		"I6VPz1YmO8jte",
		"I2FohMywq7LGM",
		"Z3vTFHy38u9nq",
		"GnFHkJW23l2Uw",
		"NQr1PcSHfsu9G",
		"fkKORiZTUQvhC",
		"zu0ejEdgkkBeE",
		"EqNfolceUiLPW",
		"Fbe3cKYyDQAk8",
		"zHlOe6qpiXdWo",
		"QYyuHG7OxZNeM",
		"iidFTlW3p3G9i",
		"EVuKSn97WOC64",
		"D5GyCFkInbJlu",
		"k4g9XxjQKG2M8",
		"JtFn3iauqR9tu",
		"B7ATjZ0dmnpFC",
		"LyI6m5Avnyo2A",
		"JaJer3JaOFGRG",
		"X6FXRC3wDHtE4",
		"11PSZLrLgQo4xO",
		"PsHmaJvo2qLjq",
		"v0R8DV5BWeAJW",
		"vrSwnLiPXZt8Q",
		"B1pNy5v7PE5aM",
		"kocrNZBTlCiQw",
		"eUwRDPu2KBIwo",
		"iJuYqlNSbSjjq",
		"cVNY8iuNBzh8Q",
		"56J4crKVD2zde",
		"KDbRdP2cpZZkc",
		"zaZLRddFdhziM",
		"u3iDDv69EG9fG",
		"LSQEtyzyFDGak",
		"8eY1RqFQlD2JW",
		"11lPWgrjQxrBTy",
		"WsVl3CXmJfxK",
		"Sos2kKKBJF7XO",
		"FVsYNpEsoYdpu",
		"10KqQPub2aUUEg",
		"vLO7Jl2eoL5Qc",
		"xAiSQ77jduhsQ",
		"Jb5jZxxqFjY2s",
		"AmTjK5o8BdnKo",
		"12JuylK8diwdX2",
		"JAmXreJHbFwSA",
		"I49ZIhBcdY3bq",
		"12FylCmazvk9yM",
		"yBryRBdMKR6F2",
		"12VqFoZE1QUnw4",
		"NMYEUk9CCwwHS",
		"11Ktlc32QTkNZC",
		"cXojsncd033G0",
		"vyHxl9Mpeq3Di",
		"o1Qr397V1WlCo",
		"A4X3oXPlGJAzu",
		"qqBRgmarYUfYs",
		"12huMtTyZ4SRSE",
		"EeRUn0UwwojyU",
		"Dsvz9D6FBdmk8",
		"13gN7MmbYPZFo4",
		"C7UUQ6v1fQ5kA",
		"nZ7ZoOOwHXVjG",
		"Xb12Ht9lmTobK",
		"xRNd8DWBDgYA8",
		"11PWwNDx3XsaDS",
		"zOtaJZSCavzHy",
		"108M7gCS1JSoO4",
		"eLPbkFkW5wRUc",
		"6w7vdYF31O5mU",
		"NDgaKQBJNpPlS",
		"2Z9TNfuTX86qc",
		"mvpbV6lPBlViU",
		"13gSFcmRDld56M",
		"DaIhUcrw9MX16",
		"ZSBoZFeTR2tG0",
		"12ZYIsY0JR9hq8",
		"12moLcaBM85zsk",
		"INcjoIKEYxlPq",
		"uTFJWrJ6HXbNu",
		"14pgKcK9Cu9oPK",
		"VtOHPs4wn2aXK",
		"KwSWMW3cNCzyo",
		"NTrNCywZPYeBy",
		"LkurVDFdUk6J2",
		"kWqTfdz5RJBRe",
		"CvkcC98z6Hmak",
		"s6NoPuIFLsmE8",
		"zr77LNtyNI7E4",
		"10gRYQ8cNiSH04",
		"OL2MYhJvJDL3i",
		"5URgRkmdFLTSo",
		"qBbfnNGDfS2re",
		"Dr51rYp9tOgCI",
		"8ufWBl0WuqlXi",
		"W64WfuoyHEgzm",
		"PGRVr241saGRO",
		"UkfBDAiTgBgOI",
		"Rga6zm43LBr4Q",
		"cSuUZvEQDmUGQ",
		"7KAZmc3EmNm4o",
		"12RHDGYYdJiBjO",
		"ru4roM8I5UpeE",
		"14pgKcK9Cu9oPK",
		"SQQ5WkBVT5Ikg",
		"11OZ14lNYW6i08",
		"3XO7QimWY949a",
		"zSTqnsTHpbKE0",
		"fxGk7BquRnF6g",
		"HASaN34bFjuec",
		"f2Ni05G35UUAU",
		"10YqlkNGIW8ThC",
		"E0I0geRRFbaJq",
		"zSTqnsTHpbKE0",
		"ylQqYQSZ9LCCY",
		"9ig0L2ijBFRgA",
		"BzyIvVsLgaZnG",
		"2PgiFQtbDMD2o",
		"pJTVz0zXcuF0I",
		"Cb03ptUayqtgs",
		"118mNgUVEyLOyk",
		"tJNzM7qAANpPa",
		"YplN7yd7Pt8hq",
		"QjV7p9GHa0BOg",
		"KsAGNvsAmpu80",
		"UUBkq7oeFeJTq",
		"fgeHN6jjeyWkg",
		"Xofh1CKh7bhWU",
		"w3bJwQSeEPNra",
		"7wkeLLjdQq43C",
		"JWYO9tMuMlOBG",
		"A23kIsbTK7Gwg",
		"oC6D5lvLroplS",
		"QSHHKn0Trjswo",
		"9JLQKmspQAMWQ",
		"9WsTM8zLbys4o",
		"BeXoJOpe1vtwQ",
		"jbli9bKLCHTck",
		"oAX1fIxaBYXvy",
		"vDqFhrwvoFQqc",
		"GZuBpP1cWC1yg",
		"cItP110unFqvK",
		"hsS9oYOx2eISI",
		"ned7nIg86iOmk",
		"RuXKRFlkvmtFu",
		"pt4sV3CmeZrqg",
		"cPJl4dcHaS5sk",
		"NZBpOC0ZD0aoU",
		"H26q5gex8A012",
		"h3kVfqRXqj8Nq",
		"YcrsZVgs2gnVS",
		"W0i5GejMinONO",
		"wFPsoPU9uucDe",
		"SstCSKxon4zkc",
		"CzqM6cMO0pNy8",
		"6vEMVISfkRjDa",
		"PUY972A7l1Zvy",
		"FRpS81Ch3oASc",
		"nA4z9BTPp7Fpm",
		"hTMeMFy20P972",
		"b7FN2NC6DbplK",
		"13eiswTaTM0O8E",
		"rM4YrrUv5Qji8",
		"t9aH29kXgsUEM",
		"UhjDKvalUVTkQ",
		"pEVLRdsiPxLfW",
		"mulwLo7fLKR7q",
		"kWfaq2dJgwF7a",
		"KnP9mc7uPaWOs",
		"KpqjSFWDz52wg",
		"I6C4WZlHQRQdi",
		"D5NpIkUy0BYLm",
		"Cr7AfrUbRatmo",
		"by69itvsN4iRO",
		"9j3umo6u2yVdC",
		"xkdUsgFwboNoY",
		"145HufBoClSk1i",
		"zB6aLI7fZgpig",
		"EGRY9YkEQBzXi",
		"5FEOqX3AjTDlm",
		"dcjZ06S4JUmiY",
		"52oC963ppTb9K",
		"FKO7Xfm1BEP9m",
		"2zQshFYPpxPTW",
		"XwhEhu60cZI88",
		"68Hv4IUM2Q5a0",
		"toxV2xyeTjsD6",
		"QbTHvN8xz1jd6",
		"KNLZHGhd2aMZa",
		"hjFxZQ5uOIaU8",
		"SXuWoSsQ7HEnS",
		"sximRRglCyOVW",
		"qD46btgsaxfK8",
		"taG7qRcNp0SC4",
		"QbBJxGRffd8ZO",
		"RuuenKCDDIcFO",
		"4TjGsLxU2worS",
		"10dUT1BVhyEI7u",
		"4Nx7YH3sYsTDi",
		"mPa9rz5nh5Um4",
		"4PdYkofSzCtPO",
		"10FtRf9SBSqQlG",
		"cOgovno1ONHyw",
		"m4ZI9DK6YGHDO",
		"rqU2UoiwiT6Ba",
		"56QNHKNIBdTPy",
		"oDOndpwjr0qME",
		"mR7L6O0VYauhq",
		"vR4GI0hDMnZ5K",
		"Bge1LEOE7aGIg",
		"CMifJJhu0TRwA",
		"92Mdu89IGgw2A",
		"45RmW47RpKheo",
		"4Zop9odxdCJiM",
		"41gN46tZsBTgc",
		"39mzOOSsRsENi",
		"B38Ik8n5tyDqU",
		"OoaUDeCsE1qpi",
		"Om6nlzij2gu9q",
		"NaX8bRs8brDt6",
		"NKlDC9PvlL8I0",
		"NNpe36RHuOCtO",
		"LHZyixOnHwDDy",
		"LZV3ufhAOQqMU",
		"KjPYXwKOq7rgc",
		"K1PRqkA3c3HoY",
		"JuedjKpdhm3oA",
		"KHku2rCXj04h2",
		"Kmr9DlFeYyvII",
		"HBsfxE92XlMOs",
		"Fz7oZ7EKrX7OM",
		"G2NrX5rRhjRNS",
		"FVVGBTI2rfbP2",
		"F90skVT6QwmZy",
		"Ehsrr23ESPc5i",
		"EtAaFIONT6adi",
		"E2dQGu1sBvNFS",
		"11waH2ZgVkztRK",
		"DEY8GzcTr472U",
		"miYlpGreryAV2",
		"13mSifYTO2WiAM",
		"5vCY3ijjL94Vq",
		"SwrhDNm0JEGnS",
		"QM1o1dLMEnAyI",
		"Bi1PtpAB7cYxy",
		"c7goDcMPKjw6A",
		"HgjNZa6aqlPgs",
		"HDhtmrcussMj6",
		"a705v36UGMw1y",
		"K08z0ek0YyTmw",
		"KRkbisTz9v5Ru",
		"ZoZEN29hxuPJe",
		"BrEmaSGmUb5VS",
		"SiMo5syuENTXy",
		"oK8DiHwofU0SY",
		"nOvmTNIhBNp6",
		"AqL6rVgZJnEmk",
		"iYpftOjGMEW7C",
		"ig8LTkHmIiuqc",
		"eFlViysuC2uJi",
		"9Kr5MYcPITskg",
		"y2b0GWV3uGOME",
		"YkkAUuhZ8Efok",
		"Z9ek7UNQuzTLW",
		"LrrgXQj4OOu2Y",
		"iv2fRnmDCFCBW",
		"MaGOls5GLIZuU",
		"QAdCe7y4kZmAo",
		"14pXAM05AJAUQo",
		"bQC7ZxmQ3LdLO",
		"HGRAq103IKtgY",
		"14oegyBcUH8U4U",
		"G6YpT8QfGLRVm",
		"4PIfpnnzQXRkc",
		"aM57rzzMfN7Gg",
		"1jvMFQMv3pU6A",
		"zpyCctMreCcgw",
		"GypVyX5Nw0R2g",
		"HtCPFeCVzpiJa",
		"JaNVFKCfDJl4c",
		"EQuzfuHEBFnbO",
		"Bfka7X76eeNu8",
		"10muqpub69pXu8",
		"bXuNbdmb3zXuo",
		"FAGWSIj9jnleM",
		"I5gZVLv0bhiuc",
		"14qTNh6GnI4FFK",
		"NKZs7apgzTe8w",
		"y6Hv6Tylcmfq8",
		"5Vh6I6PvaRBiU",
		"WwFlcmG60p1VS",
		"11nLfbJ3VA5PRC",
		"EGi3vUZnXPO36",
		"MvpqwVoRHi1VK",
		"I5gZVLv0bhiuc",
		"qGi5lQ6E00du8",
		"y6Hv6Tylcmfq8",
		"5Vh6I6PvaRBiU",
		"WwFlcmG60p1VS",
		"JwJn20NoLxwm4",
		"QG8kX0sdWRii4",
		"14jg29YB6RHmda",
		"1WU3XkYA1OYBq",
		"nZEV1MguNieVW",
		"ak9w7iVp1BNC0",
		"6Ocjw628nbFw4",
		"A4t2Th5RQ2av6",
		"7zS6lP09yB32w",
		"12XAUmnplaO4QE",
		"m9Zm6WWwo7yfe",
		"yqROii3K55HK8",
		"Mf4ZD9tN9thio",
		"JrBtAI2sjfvwc",
		"MQV4flwkzZA8U",
		"dIvWX5pARVd8k",
		"Xr513WaVXbB2U",
		"x4PIuK3TvKNAA",
		"LzXGjRvtoWREI",
		"4UV5sEiP8jJu",
		"12gkLh22noq2vC",
		"gq9tSZqmzYUU",
		"5JBUdmu6oBqDe",
		"112hgiGc1Aa7cI",
		"O2RBmB214sHBu",
		"irL5aw7aimAz6",
		"Or9WqBPLRw3WU",
		"8JygiPDBRwpQk",
		"BCL4SRZuQi3du",
		"11cxgnJupjgGw8",
		"anP8WL7YYisne",
		"8grEkXLKoy6Ji",
		"Dvle3DdIB46XK",
		"10QeOpoiyOo1Ta",
		"kg9t6wEQKV7u8",
		"fU47HBZzTLwty",
		"m7lAXYiwigvyE",
		"H02DZLmsxELNm",
		"yYcobj1lMONnq",
		"ZTtnMfBmhYm64",
		"30HyXXRCzV6z6",
		"D3ka73iCFWkfe",
		"AT6KpjDhgd9FS",
		"7NIECetwh3na0",
		"Kx82Lvb7wcYNO",
		"rc5G8UGsJzah2",
		"YpMmK6IQqZlHa",
		"Ler3y3UCurZWU",
		"f3rv6Hu2tn8xa",
		"tZ7d4H0x5m1sQ",
		"kV8tyw2iFkdzy",
		"Quxy6UmCmEkQU",
		"NWnkhrJATQses",
		"RyMQTapj9aJOg",
		"gSR8HR203kjWo",
		"104iXhYJvIJwZ2",
		"xEp3WjlC6x9ew",
		"ZzrpgP88U5Jio",
		"Xs3NDt73eGQnK",
		"6LTfOGfFAN9ew",
		"NRPZcpwmgEvgA",
		"z20BAlxwXi50c",
		"12KavX0YerWaE8",
		"vLl10VMQ6z7vq",
		"axGlc4f23Dwxa",
		"fbyoEuHR5zKNi",
		"ScQ5z6a0LJX4k",
		"PApa5UNm7rcQw",
		"ChAI00xI48qsg",
		"A6BC9eTFiDNzW",
		"DKh7n58GUxtMQ",
		"WE3ahQYE9zEVq",
		"11YTrOIUJQflao",
		"hSbGvg8TsV63m",
		"13A6ML9UYLZzCU",
		"DKh7n58GUxtMQ",
		"dBDi2OuI239As",
		"g1e4s0wmPwbuw",
		"VUBUkDlVwQkjm",
		"jR9ZTFGC5hKy4",
		"WCxX2o6QL75G8",
		"MydhMHpw0BEZ2",
		"XAWO7sTYmZCfe",
		"FdPkWqy1LkV1K",
		"xv0aoK7MRYxGw",
		"EwGaTyWDWFoaY",
		"vSBxwZ9h67vnG",
		"pbVk4WSPGvsIw",
		"N5oKZEI5Idtwk",
		"uAU6ktoujghhK",
		"K5a0BLGdgbYt2",
		"v0BCStk8oxCa4",
		"bExYPhaiDaB6o",
		"eJjrOVIbS4rpC",
		"MRgk91DUT8p8Y",
		"13nSHtMg4TyNTa",
		"PnQ1dqv4zDvKE",
		"tOghj0o19ONyw",
		"VzmmU1dgcY01y",
		"55rZjW946klK8",
		"I5HpSldcuiMQo",
		"hal6YCOfgvnoI",
		"cKQEC7pGQtfEY",
		"ZN8DxRe8CrBss",
		"E1xNJCu9odlG8",
		"OI4qE86c8QUOA",
		"5nMITTEx92MdW",
		"tX99OOO4FA9Pi",
		"v7URZ1FPnAad2",
		"PLhUg5DzOhC3S",
		"Z1AgOgPwF81Ne",
		"7AZjBFYWxxIkM",
		"6LnjHXeglQHUk",
		"LPariJLO5y92w",
		"rudni9yEVX3lC",
		"oS44ii1sJMW8o",
		"J6uqcO8IWuRNu",
		"m5pgqQ1VZ3CeI",
		"uPTJkFvfDDdtK",
		"JT5IupoDW7hUA",
		"8hQeTRp7SkrF6",
		"Dea0leKapJzJC",
		"11H2sYCtWyuTF6",
		"Ggilj1JJV681y",
		"Dea0leKapJzJC",
		"QlCJzuC5OyN5m",
		"V90VsQ2DxGYQo",
		"nV9t4O4DDXNDi",
		"oVF4Mfsp3oTXa",
		"V3i1Qr8aSXmVi",
		"rzizomcAURycU",
		"2KZXTDxFyuowg",
		"GPeiJYMOwsE6c",
		"ghE8B9zWLwxPO",
		"8zIYYqmgMLa3m",
		"S3brPBASKQuLC",
		"4Dr0gynhZAApi",
		"pBnhgs83a2Hpm",
		"VDhJD4MgjPU6k",
		"GT3uztapvHfSU",
		"nSLNPmmU6nNte",
		"w9WJ5FIS4LYPK",
		"EYpylFAyuRKjS",
		"4lcCDN3dW2kiA",
		"ds3KsojN3FXmU",
		"bXDNIdtd3vwWs",
		"PT9XFgRDeS65y",
		"W2JiHcUyeev5u",
		"zZM8YhpV2q7cc",
		"wKPslC74U0qIM",
		"P3HJhTCGbGDCg",
		"5TBa0Zw2S78ac",
		"47vlWZrpr5eO4",
		"mNfBORifulTEs",
		"3GpqRggQIvtu0",
		"vGj0LmTNSIPPW",
		"y7YR68rEKkCTm",
		"RtwKMmYTGEn0A",
		"CFLKtdbDw1Kgg",
		"HiNYwgfklWQPm",
		"1OqLHVjDhi5Fu",
		"U50DVIsdc46c",
		"pdF8tK6Dc5HO0",
		"SDIiFQMC3ZMvS",
		"UICiX6IvJza00",
		"SSjpc95W0pk88",
		"erItGQ8TQG8IE",
		"y9Tkt23w3QvKg",
		"9GC4vXMJ8EeaY",
		"9yPZONpJ98tO",
		"13upndhuZgbgfm",
		"12K6BQWFZXFIGs",
		"QWmJCU3CLDwQM",
		"9DzSJmBx2ruWk",
		"h3CvQSopVvBJe",
		"u7uELS5KCvwDC",
		"yf3kGklz0CCfm",
		"Ty4Z5j4Meg2l2",
		"OmpwbotQMqbIY",
		"UZgpIT0z1yczS",
		"MA7X6brqBTWDe",
		"u0XrMrGNFvt4s",
		"a8uw2smjDlvXa",
		"1tKyHMAN0VYNq",
		"11yukdIW8fzmyk",
		"1lrZeNIa70Ymc",
		"AjGRqs06tRFwQ",
		"lqKVfL4iwWmKk",
		"74s3WOgjXkx3i",
		"189KOdMMkkOJO",
		"11yukdIW8fzmyk",
		"r2QRKBknJcmvm",
		"AHj0lQstZ9I9W",
		"lyZSFzeNAIWuk",
		"zqgpjoA3yK7aE",
		"kyeIEFsFQ75ew",
		"hF6dgSQgqFDRS",
		"dG7ZiL6ImLyNO",
		"ltigdyYsYVqSc",
		"4ATNcOi0lbg1a",
		"4pGTfJ5Sgo62I",
		"WXftwhr9UZ7tC",
		"ybSDeIfdR0VQk",
		"r9hSQCYinSqpa"
	];

//timer
var timer = (function(window, $) {

	// requestAnimationFrame
	var lastTime = 0;
	var vendors = [ 'ms', 'moz', 'webkit', 'o' ];
	for( var x = 0, limit = vendors.length; x < limit && !window.requestAnimationFrame; ++x ) {
		window.requestAnimationFrame = window[ vendors[ x ]+'RequestAnimationFrame' ];
		window.cancelAnimationFrame = window[ vendors[ x ]+'CancelAnimationFrame' ] || window[ vendors[ x ]+'CancelRequestAnimationFrame' ];
	}

	if ( !window.requestAnimationFrame ) {
		window.requestAnimationFrame = function( callback ) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
			var id = window.setTimeout( function() { callback( currTime + timeToCall ); }, timeToCall );
			lastTime = currTime + timeToCall;
			return id;
		};
	}

	if ( !window.cancelAnimationFrame ) {
		window.cancelAnimationFrame = function( id ) {
			clearTimeout( id );
		};
	}

	// initialize
	var that		= {},
		m			= moment(),
		snd_m		= moment(),
		$hh			= $("#js-hh"),
		$mm			= $("#js-mm"),
		$ss			= $("#js-ss"),
		$hhInvert	= $("#js-hh-invert"),
		$mmInvert	= $("#js-mm-invert"),
		$ssInvert	= $("#js-ss-invert"),
		hh,
		mm,
		ss,
		snd_hh,
		snd_mm,
		snd_ss;

	function render() {

		m	= moment();

		var _hh	= m.hours(),
			_mm	= m.minutes(),
			_ss	= m.seconds();

		renderText($hh, _hh, hh);
		renderText($mm, _mm, mm);
		renderText($ss, _ss, ss, true);
		renderText($hhInvert, _hh, hh);
		renderText($mmInvert, _mm, mm);
		renderText($ssInvert, _ss, ss, true);

		hh	= _hh;
		mm	= _mm;
		ss	= _ss;
	}

    function triggerBGM(_ss, ss) {

        if(soundPlayer && ss !== _ss) {
            soundPlayer.playSound(_ss);
			soundPlayer.playSignal(_ss);
        }
    }

	function renderText($dom, num, oldNum, isDispatch){

		if(num !== oldNum){
			$dom.text(zeroFormat(num, 2));

			if(isDispatch){
				$(that).trigger("update", [num])
			}
		}
	}



	function zeroFormat(num, n){// ZeroFormat(1,3) => "001"
		var ret=""+num;
		while(ret.length < n){
			ret = "0" + ret;
		}
		return ret;
	}


	// start loop
	(function animloop(){
		window.requestAnimationFrame(animloop);
		render();
	})();


	//sound timer

	function renderSound() {
		snd_m	= moment();

		var _hh	= snd_m.hours(),
			_mm	= snd_m.minutes(),
			_ss	= snd_m.seconds();

		triggerBGM(_ss, snd_ss);

		snd_hh	= _hh;
		snd_mm	= _mm;
		snd_ss	= _ss;

		setTimeout(renderSound, 8);
	}

	// start loop
	renderSound();


	return that;
})(this, jQuery);

// GIF manager
var gifManager = (function(window, $) {

	var API				= "http://api.giphy.com/v1/gifs/search?q=cat&api_key=dc6zaTOxFJmzC",
		API_QUERIES		= "&limit=100",
		CACHE_LIMIT_H	= 1,
		MAX_SLIDES		= 75,
		nowMS			= moment().toDate().getTime(),
		limitMS			= Number(localStorage.getItem("limitMS")),
		version			= Number(localStorage.getItem("version")),
		current			= -1,
		that			= {},
		$photo			= $("#js-photo"),
		$photoLink		= $("#js-photo-list-link"),
		shouldUpdate,
		playList;

	if(version < VERSION) {
		shouldUpdate = true;
	} else
	if(limitMS !== null && (limitMS+"").match(/^-?[0-9]+$/)){
		if(limitMS > nowMS) {
			shouldUpdate = false;
		} else {
			shouldUpdate = true;
		}
	} else {
		shouldUpdate = true;
	}

	if(shouldUpdate){
		updateList();
	} else {
		readyPhoto();
	}

	$photoLink
		.on("mouseenter", function(){
			$(this).addClass("glyphicon-new-window");
		})
		.on("mouseleave", function(){
			$(this).removeClass("glyphicon-new-window");
		});



	// Methods
	function updateList() {

		localStorage.clear();

		$.getJSON(API, function(_data) {
			var offset = Math.floor(Math.random() * (_data.pagination.total_count/4 - 100));

			$.getJSON(API + API_QUERIES + "&offset=" + offset, function(data) {
				var datas = filter(data.data),
					imageList = _.pluck(
					_.pluck(
						_.pluck(datas, "images"),
						"original"),
					"url"),
					linkList =  _.pluck(datas, "url");
				if(imageList && imageList.length) {
					localStorage.setItem("limitMS", Math.floor(nowMS + CACHE_LIMIT_H * 60 * 60 * 1000));
					localStorage.setItem("imageList", arrToStr(imageList));
					localStorage.setItem("linkList", arrToStr(linkList));
					localStorage.setItem("version", VERSION+"");
					photoList = imageList;
					readyPhoto();
				} else {
					alert("error : API取得失敗");
				}
			});
		});
	}

	function filter(datas) {
		return _.filter(datas, function(elem){

			if(_.contains(FILTERS, elem.id)){
				console.log("filtered:",elem.id);
				return false;
			}
			return true;
		})
	}

	function readyPhoto(){
		var imageList,
			linkList,
			photoList,
			cueFirst,
			cueBackground;

		playList		= [];
		imageList		= strToArr(localStorage.getItem("imageList"));
		linkList		= strToArr(localStorage.getItem("linkList"));
		photoList		= createPhotoList(imageList, linkList);
		photoList		= _.first(_.shuffle(photoList), MAX_SLIDES);
		cueFirst		= _.first(photoList, 2);
		cueBackground	= _.last(photoList, photoList.length - 2);


		loadPhotos(cueFirst, function(){
			loadPhotos(cueBackground);
			that.isReady = true;
		});

	}

	function createPhotoList(imageList, linkList) {

		return _.map(imageList, function(image, i){ return {src:image, id:linkList[i]}; });
	}

	function loadPhotos(list, callback) {

		function fileloadHandler(evt) {
			playList.push(evt.item);
		}

		function completeHandler(evt) {
			loader.removeEventListener("fileload", fileloadHandler);
			loader.removeEventListener("complete", completeHandler);
			if(typeof callback === "function")callback();
		}

		var loader = new createjs.LoadQueue(false);
		loader.setMaxConnections(2);
		loader.addEventListener("fileload", fileloadHandler);
		loader.addEventListener("complete", completeHandler);

		loader.loadManifest(list);
	}



	function change(){

		var item;

		if(!that.isReady)return;
		current++;
		if(current == playList.length){
			current = 0;
		}

		item = playList[current];

		$photo.css({
			backgroundImage:'url('+ item.src +')'
		});
		$photoLink.attr("href", item.id);
	}


	// Utilities
	function strToArr(str) {
		return str.split(",");
	}

	function arrToStr(ar) {
		return ar.join(",");
	}
	that.change = change;
	return that;

})(this, jQuery);

//sound player
var soundPlayer = (function(){
	var ua = navigator.userAgent;
	if ((/iPhone/.test(ua) || /iPad/.test(ua)) || /iPod/.test(ua)) {
		$(".sound").hide();
		return;
	}

	var isMusicReady	= false,
		isMusicPlaying	= false,
		manifest		= [
			{src:"music.mp3",		id:"music"},
			{src:"sine500.mp3",		id:"s500"},
			{src:"sine1000.mp3",	id:"s1000"},
			{src:"sine2000.mp3",	id:"s2000"}
		],
		queue			= new createjs.LoadQueue(),
		$soundBtn		= $(".js-sound-btn"),
		bgm,
		s500,
		s1000,
		s2000;

	createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashPlugin]);
	queue.installPlugin(createjs.Sound);
	queue.addEventListener("complete", loadComplete);
	queue.loadManifest(manifest);




	function loadComplete(evt) {

		s500 = createjs.Sound.createInstance("s500");
		s1000 = createjs.Sound.createInstance("s1000");
		s2000 = createjs.Sound.createInstance("s2000");
		bgm = createjs.Sound.createInstance("music");
		bgm.addEventListener("complete", function () {
			isMusicPlaying = false;
		});
		isMusicReady = true;

		s500.setVolume(0.8);
		s1000.setVolume(0.8);
		s2000.setVolume(0.8);
		bgm.setVolume(0.7);

		configureSoundBtn();

	}

	function configureSoundBtn() {
		$soundBtn
			.click(function(){
				var mute = !bgm.getMute();
				changeSoundMute(mute);
			});
	}

	function changeSoundMute(isMute) {

		if(isMute){
			$soundBtn.removeClass("glyphicon-volume-down");
			$soundBtn.addClass("glyphicon-volume-off");
		} else {
			$soundBtn.removeClass("glyphicon-volume-off");
			$soundBtn.addClass("glyphicon-volume-down");
		}
		s500.setMute(isMute);
		s1000.setMute(isMute);
		s2000.setMute(isMute);
		bgm.setMute(isMute);

	}

	function playSound(sec) {
		if(!isMusicReady || isMusicPlaying || sec !== 0)return;
		bgm.play();
		isMusicPlaying = true;
	}

	function playSignal(sec) {

		if(!isMusicReady)return;

		switch (sec) {
			case 0:
			case 10:
			case 20:
			case 30:
			case 40:
			case 50:
				s1000.play();
				break;

			case 57:
			case 58:
			case 59:
				s500.play();
				break;

			default:
				s2000.play();
				break;
		}

	}

	return {
		playSound	: playSound,
		playSignal	: playSignal
	}
})();

// display manager
(function() {
	var $maskA	= $("#js-mask-clock"),
		$maskB	= $("#js-mask-clock-invert"),
		$maskP	= $("#js-mask-photo");

	$(timer)
		.on("update", function(e, sec){
			var isEven	= false,
				num		= sec%10;
			if(Math.floor(sec/10) % 2 == 0){
				isEven = true;
			}
			changeView(num, isEven);
		});

	function changeView(num, isEven) {

		if(!isEven) {
			switch (num) {
				case 1:
					changeZ($maskB, 5);
					reset($maskA, "width", "0%");
					reset($maskA, "height", "100%");
					changeZ($maskA);
					anim($maskA, "width", "100%");
					break;

				case 2:
					reset($maskB, "width", "100%");
					reset($maskB, "height", "0%");
					changeZ($maskB);
					anim($maskB, "height", "100%");
					break;

				case 3:
					reset($maskA, "width", "100%");
					reset($maskA, "height", "100%");
					anim($maskB, "width", "0%");
					break;

				case 4:
					changeZ($maskA);
					reset($maskB, "width", "100%");
					reset($maskB, "height", "100%");
					anim($maskA, "height", "0%");
					break;

				case 5:
					changeZ($maskA);
					reset($maskA, "width", "0%");
					reset($maskA, "height", "100%");
					anim($maskA, "width", "100%");
					gifManager.change();
					break;

				case 6:
					changeZ($maskA, 5);
					reset($maskP, "width", "100%");
					reset($maskP, "height", "0%");
					changeZ($maskP);
					anim($maskP, "height", "100%");
					break;

				case 7:
				case 8:
				case 9:
				case 0:
					break;
			}
		} else {
			switch (num) {
				case 1:
					changeZ($maskB, 5);
					changeZ($maskP);
					reset($maskB, "width", "100%");
					reset($maskB, "height", "100%");
					reset($maskP, "width", "100%");
					reset($maskP, "height", "100%");
					anim($maskP, "width", "0%");
					break;

				case 2:
					changeZ($maskB);
					changeZ($maskA, 5);
					reset($maskA, "width", "100%");
					reset($maskA, "height", "100%");
					anim($maskB, "height", "0%");
					break;

				case 3:
					changeZ($maskB);
					reset($maskB, "width", "0%");
					reset($maskB, "height", "100%");
					anim($maskB, "width", "100%");
					break;

				case 4:
					changeZ($maskA);
					changeZ($maskB, 5);
					reset($maskA, "width", "100%");
					reset($maskA, "height", "0%");
					anim($maskA, "height", "100%");
					break;

				case 5:
					reset($maskB, "width", "100%");
					reset($maskB, "height", "100%");
					anim($maskA, "width", "0%");
					gifManager.change();
					break;

				case 6:
					changeZ($maskB);
					changeZ($maskP, 5);
					reset($maskP, "width", "100%");
					reset($maskP, "height", "100%");
					anim($maskB, "height", "0%");
					break;

				case 7:
				case 8:
				case 9:
				case 0:
					break;
			}
		}
	}

	var $window = $(window);
	function anim($mask, key, value) {
		var obj = {},
			time = 500;
		obj[key] = value;
		if(key === "height"){
			time = time/$window.width()*$window.height();
		}
		$mask
			.stop()
			.animate(obj, time, "easeOutExpo");
	}

	function changeZ($current, index) {
		index = index || 10;
		$(".z"+index).removeClass("z"+index);
		$current.addClass("z"+index);
	}

	function reset($mask, key, value){
		var obj = {};
		obj[key] = value;
		$mask.stop();
		$mask.css(obj);
	}

})();


// fullscreen
(function() {
	var $btn = $(".js-fullscreen-btn");

	function requestFullscreen(element){
		if(!(element.requestFullscreen)){
			var requestFullscreen = element.webkitRequestFullScreen ||
				element.mozRequestFullScreen ||
				element.oRequestFullScreen ||
				element.msRequestFullScreen;
			element.requestFullscreen = requestFullscreen;
		}
		element.requestFullscreen();
	}


	function exitFullscreen() {
		if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else {
			document.exitFullscreen();
		}
	}

	function getFullscreenElement() {
		return (document.webkitFullscreenElement && document.webkitFullscreenElement !== null)
			|| (document.mozFullScreenElement && document.mozFullScreenElement !== null)
			|| (document.msFullscreenElement && document.msFullscreenElement !== null)
			|| (document.fullScreenElement && document.fullScreenElement !== null);
	}


	function handleFSevent() {
		if( getFullscreenElement() ) {
			$btn.removeClass("glyphicon-fullscreen");
			$btn.addClass("glyphicon-resize-small");
		}else{
			$btn.removeClass("glyphicon-resize-small");
			$btn.addClass("glyphicon-fullscreen");
		}
	}

	$btn.click(function(){
		if(getFullscreenElement()){
			exitFullscreen();
		} else {
			requestFullscreen($("article").get(0));
		}
	});

	document.addEventListener("webkitfullscreenchange", handleFSevent, false);
	document.addEventListener("mozfullscreenchange", handleFSevent, false);
	document.addEventListener("MSFullscreenChange", handleFSevent, false);
	document.addEventListener("fullscreenchange", handleFSevent, false);
})();

// fit window on resize
(function(){
	var $window = $(window);
	$window.resize(_.throttle(function() {
		var w = $window.width(),
			h = $window.height();
		$(".js-full-resize")
			.css({
				width	: w + "px",
				height	: h + "px"
			});
	}, 100));
	$(function(){
		$window.trigger("resize");
	});
})();