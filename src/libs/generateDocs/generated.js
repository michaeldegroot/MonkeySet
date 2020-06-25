
  /**
   * @Summary Vector Absolute Value
   * @name MonkeySet.Indicator#abs
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns abs - {array} the result from abs
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().abs({input1: 'close'})
 * 
 * result = {
    "abs": [
        531.61,
        497.82,
        508.93,
        525.09,
        550.68,
        583.87,
        580.09,
        607.01,
        584.87,
        567.26,
        553.51,
        573.04
    ]
} */
  /**
   * @Summary Vector Arccosine
   * @name MonkeySet.Indicator#acos
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns acos - {array} the result from acos
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().acos({input1: 'close'})
 * 
 * result = {
    "acos": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]
} */
  /**
   * @Summary Accumulation/Distribution Line
   * @name MonkeySet.Indicator#ad
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns ad - {array} the result from ad
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().ad()
 * 
 * result = {
    "ad": [
        -43801.12343895787,
        -214055.91263253547,
        -281913.13186924404,
        -383970.5968616726,
        -512018.7211010857,
        -667721.0666291331,
        -810081.0591923756,
        -920977.0591923756,
        -914976.8995192137,
        -917935.5054838636,
        -931799.5054838636,
        -1012533.6539767721
    ]
} */
  /**
   * @Summary Vector Addition
   * @name MonkeySet.Indicator#add
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @param options.input2 {array} The second input
 * @returns add - {array} the result from add
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().add({input1: 'close', input2: 'open'})
 * 
 * result = {
    "add": [
        1061.22,
        1000.64,
        1024.86,
        1044.18,
        1092.36,
        1160.74,
        1145.18,
        1219.02,
        1169.74,
        1135.52,
        1106.02,
        1154.08
    ]
} */
  /**
   * @Summary Accumulation/Distribution Oscillator
   * @name MonkeySet.Indicator#adosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @returns adosc - {array} the result from adosc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().adosc({'short period': 2, 'long period': 6})
 * 
 * result = {
    "adosc": [
        -191612.97115280898,
        -218316.55284881534,
        -225336.5384242806,
        -181800.94303356193,
        -137933.66201591236,
        -106497.51662772684,
        -109483.34493684268
    ]
} */
  /**
   * @Summary Average Directional Movement Index
   * @name MonkeySet.Indicator#adx
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns dx - {array} the result from adx
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().adx({period: 6})
 * 
 * result = {
    "dx": [
        25.55118312569774,
        25.314605463631075
    ]
} */
  /**
   * @Summary Average Directional Movement Rating
   * @name MonkeySet.Indicator#adxr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns dx - {array} the result from adxr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().adxr({period: 6})
 * 
 * result = {
    "dx": []
} */
  /**
   * @Summary Awesome Oscillator
   * @name MonkeySet.Indicator#ao
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns ao - {array} the result from ao
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().ao()
 * 
 * result = {
    "ao": []
} */
  /**
   * @Summary Absolute Price Oscillator
   * @name MonkeySet.Indicator#apo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @param options.input1 {array} The first input
 * @returns apo - {array} the result from apo
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().apo({'short period': 2, 'long period': 6, input1: 'close'})
 * 
 * result = {
    "apo": [
        -12.87238095238098,
        -9.25297052154201,
        -0.4725450815246859,
        11.456612419722205,
        24.758485649595855,
        21.76969629488076,
        27.1667090590189,
        14.842815134476837,
        2.3727803649235284,
        -6.286328935431811,
        0.2893743617087239
    ]
} */
  /**
   * @Summary Aroon
   * @name MonkeySet.Indicator#aroon
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns aroon_down - {array} the result from aroon
   * @returns aroon_up - {array} the result from aroon
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().aroon({period: 6})
 * 
 * result = {
    "aroon_down": [
        16.666666666666668,
        0,
        0,
        0,
        0,
        83.33333333333334
    ],
    "aroon_up": [
        83.33333333333334,
        100,
        83.33333333333334,
        66.66666666666667,
        50,
        33.333333333333336
    ]
} */
  /**
   * @Summary Aroon Oscillator
   * @name MonkeySet.Indicator#aroonosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns aroonosc - {array} the result from aroonosc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().aroonosc({period: 6})
 * 
 * result = {
    "aroonosc": [
        66.66666666666667,
        100,
        83.33333333333334,
        66.66666666666667,
        50,
        -50
    ]
} */
  /**
   * @Summary Vector Arcsine
   * @name MonkeySet.Indicator#asin
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns asin - {array} the result from asin
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().asin({input1: 'close'})
 * 
 * result = {
    "asin": [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]
} */
  /**
   * @Summary Vector Arctangent
   * @name MonkeySet.Indicator#atan
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns atan - {array} the result from atan
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().atan({input1: 'close'})
 * 
 * result = {
    "atan": [
        1.5689152507795519,
        1.5687875713110535,
        1.5688314225584592,
        1.5688918936671574,
        1.5689803921308565,
        1.5690836184485013,
        1.5690724580686208,
        1.5691489089676154,
        1.5690865468001103,
        1.5690334685568574,
        1.5689896766675189,
        1.5690512496887579
    ]
} */
  /**
   * @Summary Average True Range
   * @name MonkeySet.Indicator#atr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns atr - {array} the result from atr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().atr({period: 6})
 * 
 * result = {
    "atr": [
        17.884894087713104,
        19.031577390165328,
        21.179647825137767,
        22.149780710208702,
        21.875112644528365,
        21.02092720377364,
        22.637876526503593
    ]
} */
  /**
   * @Summary Average Price
   * @name MonkeySet.Indicator#avgprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @returns avgprice - {array} the result from avgprice
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().avgprice()
 * 
 * result = {
    "avgprice": [
        530.4233967576779,
        501.799968961967,
        514.3033592937728,
        520.9896777935888,
        543.9124378693596,
        578.7343033037899,
        567.5583154417451,
        610.26,
        584.437784496701,
        567.6826844569542,
        552.76,
        579.2055940804696
    ]
} */
  /**
   * @Summary Bollinger Bands
   * @name MonkeySet.Indicator#bbands
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.stddev {number} The stddev option 
   * @param options.input1 {array} The first input
 * @returns bbands_lower - {array} the result from bbands
   * @returns bbands_middle - {array} the result from bbands
   * @returns bbands_upper - {array} the result from bbands
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().bbands({period: 6, stddev: 6, input1: 'close'})
 * 
 * result = {
    "bbands_lower": [
        363.6157598830411,
        341.99728754107196,
        352.9691137138374,
        412.196204148765,
        475.5100414572271,
        480.5303686625401,
        478.6744645307963
    ],
    "bbands_middle": [
        533,
        541.0799999999999,
        559.2783333333332,
        571.935,
        578.9633333333333,
        579.435,
        577.63
    ],
    "bbands_upper": [
        702.3842401169588,
        740.1627124589279,
        765.587552952829,
        731.6737958512349,
        682.4166252094394,
        678.3396313374598,
        676.5855354692037
    ]
} */
  /**
   * @Summary Balance of Power
   * @name MonkeySet.Indicator#bop
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns bop - {array} the result from bop
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().bop()
 * 
 * result = {
    "bop": [
        0,
        -2.8093400072964014,
        -1.1809841492903503,
        0,
        0,
        0,
        0,
        -2.5,
        0,
        -0.15445727092808087,
        0,
        -1.3979000148724179
    ]
} */
  /**
   * @Summary Commodity Channel Index
   * @name MonkeySet.Indicator#cci
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns cci - {array} the result from cci
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().cci({period: 6})
 * 
 * result = {
    "cci": [
        -114.23259514007202,
        8.17777872026108
    ]
} */
  /**
   * @Summary Vector Ceiling
   * @name MonkeySet.Indicator#ceil
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns ceil - {array} the result from ceil
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().ceil({input1: 'close'})
 * 
 * result = {
    "ceil": [
        532,
        498,
        509,
        526,
        551,
        584,
        581,
        608,
        585,
        568,
        554,
        574
    ]
} */
  /**
   * @Summary Chande Momentum Oscillator
   * @name MonkeySet.Indicator#cmo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns cmo - {array} the result from cmo
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().cmo({period: 6, input1: 'close'})
 * 
 * result = {
    "cmo": [
        39.21695518524512,
        93.524625267666,
        59.43027077789955,
        32.63174185560628,
        2.410767527046632,
        -10.440566856261498
    ]
} */
  /**
   * @Summary Vector Cosine
   * @name MonkeySet.Indicator#cos
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns cos - {array} the result from cos
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().cos({input1: 'close'})
 * 
 * result = {
    "cos": [
        -0.777043286904639,
        0.1221299285638983,
        0.9999679210703166,
        -0.9030291378039214,
        -0.6206023927017262,
        0.8932677258032552,
        -0.44945523467189724,
        -0.7759239658848893,
        0.860896898023719,
        -0.2011443690056025,
        0.8311114604600307,
        0.29614997676346316
    ]
} */
  /**
   * @Summary Vector Hyperbolic Cosine
   * @name MonkeySet.Indicator#cosh
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns cosh - {array} the result from cosh
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().cosh({input1: 'close'})
 * 
 * result = {
    "cosh": [
        3.7519714836536333e+230,
        7.933210635055371e+215,
        5.302255842959136e+220,
        5.5291644483737386e+227,
        7.182163687209669e+238,
        1.8641856183146837e+253,
        4.254573312589334e+251,
        2.089601466703409e+263,
        5.067381891139494e+253,
        1.1398765224558133e+246,
        1.217050733970575e+240,
        3.690455000859061e+248
    ]
} */
  /**
   * @Summary Crossany
   * @name MonkeySet.Indicator#crossany
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.input1 {array} The first input
 * @param options.input2 {array} The second input
 * @returns crossany - {array} the result from crossany
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().crossany({input1: 'close', input2: 'open'})
 * 
 * result = {
    "crossany": [
        1,
        0,
        1,
        0,
        0,
        0,
        1,
        0,
        1,
        1,
        1
    ]
} */
  /**
   * @Summary Crossover
   * @name MonkeySet.Indicator#crossover
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.input1 {array} The first input
 * @param options.input2 {array} The second input
 * @returns crossover - {array} the result from crossover
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().crossover({input1: 'close', input2: 'open'})
 * 
 * result = {
    "crossover": [
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0
    ]
} */
  /**
   * @Summary Chaikins Volatility
   * @name MonkeySet.Indicator#cvi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns cvi - {array} the result from cvi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().cvi({period: 6})
 * 
 * result = {
    "cvi": [
        -248.18762803502506
    ]
} */
  /**
   * @Summary Linear Decay
   * @name MonkeySet.Indicator#decay
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns decay - {array} the result from decay
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().decay({period: 6, input1: 'close'})
 * 
 * result = {
    "decay": [
        531.61,
        531.4433333333334,
        531.2766666666668,
        531.1100000000001,
        550.68,
        583.87,
        583.7033333333334,
        607.01,
        606.8433333333334,
        606.6766666666667,
        606.5100000000001,
        606.3433333333335
    ]
} */
  /**
   * @Summary Double Exponential Moving Average
   * @name MonkeySet.Indicator#dema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns dema - {array} the result from dema
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().dema({period: 6, input1: 'close'})
 * 
 * result = {
    "dema": [
        569.3570124451759,
        571.6868753216538
    ]
} */
  /**
   * @Summary Directional Indicator
   * @name MonkeySet.Indicator#di
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns plus_di - {array} the result from di
   * @returns minus_di - {array} the result from di
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().di({period: 6})
 * 
 * result = {
    "plus_di": [
        66.38049593641749,
        52.16466252735478,
        80.42491790808428,
        64.20821633409574,
        54.24240689181161,
        47.07850989802821,
        61.196879299926465
    ],
    "minus_di": [
        26.333733117176408,
        31.379304607024892,
        23.571553750798596,
        41.22279846419413,
        46.666004833103514,
        48.27584038879202,
        37.403028448631865
    ]
} */
  /**
   * @Summary Vector Division
   * @name MonkeySet.Indicator#div
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @param options.input2 {array} The second input
 * @returns div - {array} the result from div
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().div({input1: 'close', input2: 'open'})
 * 
 * result = {
    "div": [
        1.0037763637393553,
        0.9900560836879997,
        0.9864322679433257,
        1.0115586892446398,
        1.0166149756313692,
        1.012134449702706,
        1.0265444442478189,
        0.9918301988529599,
        1,
        0.9982402421426811,
        1.0018099219923622,
        0.9862315847445959
    ]
} */
  /**
   * @Summary Directional Movement
   * @name MonkeySet.Indicator#dm
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns plus_dm - {array} the result from dm
   * @returns minus_dm - {array} the result from dm
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().dm({period: 6})
 * 
 * result = {
    "plus_dm": [
        72.38757715422537,
        60.322980961854476,
        103.17414470397185,
        85.97845391997654,
        71.64871159998046,
        59.70725966665039,
        83.47867286236202
    ],
    "minus_dm": [
        28.71679566245291,
        36.286886614346926,
        30.23907217862244,
        55.19967195108208,
        61.64105380646502,
        61.225772522594184,
        51.021477102161825
    ]
} */
  /**
   * @Summary Detrended Price Oscillator
   * @name MonkeySet.Indicator#dpo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns dpo - {array} the result from dpo
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().dpo({period: 6, input1: 'close'})
 * 
 * result = {
    "dpo": [
        -35.18000000000001,
        -32.14999999999992,
        -34.18833333333316,
        -21.254999999999995,
        4.9066666666667516,
        0.6550000000000864,
        29.379999999999995
    ]
} */
  /**
   * @Summary Directional Movement Index
   * @name MonkeySet.Indicator#dx
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns dx - {array} the result from dx
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().dx({period: 6})
 * 
 * result = {
    "dx": [
        43.19376133310871,
        24.879543829773898,
        54.6685510098549,
        21.801381608511694,
        7.508196719379555,
        1.25566425355772,
        24.131717153297743
    ]
} */
  /**
   * @Summary Exponential Decay
   * @name MonkeySet.Indicator#edecay
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns edecay - {array} the result from edecay
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().edecay({period: 6, input1: 'close'})
 * 
 * result = {
    "edecay": [
        531.61,
        497.82,
        508.93,
        525.09,
        550.68,
        583.87,
        580.09,
        607.01,
        584.87,
        567.26,
        553.51,
        573.04
    ]
} */
  /**
   * @Summary Exponential Moving Average
   * @name MonkeySet.Indicator#ema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns ema - {array} the result from ema
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().ema({period: 6, input1: 'close'})
 * 
 * result = {
    "ema": [
        531.61,
        521.9557142857143,
        518.2340816326531,
        520.192915451895,
        528.9035110370679,
        544.6082221693342,
        554.7458729780959,
        569.67848069864,
        574.0189147847428,
        572.0877962748164,
        566.7798544820117,
        568.5684674871512
    ]
} */
  /**
   * @Summary Ease of Movement
   * @name MonkeySet.Indicator#emv
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns emv - {array} the result from emv
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().emv()
 * 
 * result = {
    "emv": [
        -17.289705487963833,
        27.54587977691114,
        -3.783771205840928,
        -30.70155523254036,
        -30.837192352866175,
        35.955746244552124,
        34.975738794192715,
        -77.80948757763294,
        -38.289108837153314,
        21.776354463226323,
        59.56537440614108
    ]
} */
  /**
   * @Summary Vector Exponential
   * @name MonkeySet.Indicator#exp
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns exp - {array} the result from exp
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().exp({input1: 'close'})
 * 
 * result = {
    "exp": [
        7.5039429673072665e+230,
        1.5866421270110742e+216,
        1.060451168591827e+221,
        1.1058328896747477e+228,
        1.436432737441934e+239,
        3.728371236629367e+253,
        8.509146625178668e+251,
        4.179202933406818e+263,
        1.0134763782278987e+254,
        2.279753044911627e+246,
        2.43410146794115e+240,
        7.380910001718122e+248
    ]
} */
  /**
   * @Summary Fisher Transform
   * @name MonkeySet.Indicator#fisher
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns fisher - {array} the result from fisher
   * @returns fisher_signal - {array} the result from fisher
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().fisher({period: 6})
 * 
 * result = {
    "fisher": [
        0.34282825441539394,
        0.6200954829997215,
        1.0220737187598898,
        1.1214340347935905,
        0.850313204554803,
        0.28298772237487135,
        0.0421653426599211
    ],
    "fisher_signal": [
        0,
        0.34282825441539394,
        0.6200954829997215,
        1.0220737187598898,
        1.1214340347935905,
        0.850313204554803,
        0.28298772237487135
    ]
} */
  /**
   * @Summary Vector Floor
   * @name MonkeySet.Indicator#floor
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns floor - {array} the result from floor
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().floor({input1: 'close'})
 * 
 * result = {
    "floor": [
        531,
        497,
        508,
        525,
        550,
        583,
        580,
        607,
        584,
        567,
        553,
        573
    ]
} */
  /**
   * @Summary Forecast Oscillator
   * @name MonkeySet.Indicator#fosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns fosc - {array} the result from fosc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().fosc({period: 6, input1: 'close'})
 * 
 * result = {
    "fosc": [
        0.6009412332569263,
        -0.040526515213989166,
        -7.39776930485979,
        -9.00574692380929,
        -6.636796685395744,
        2.5910931174088794
    ]
} */
  /**
   * @Summary Hull Moving Average
   * @name MonkeySet.Indicator#hma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns hma - {array} the result from hma
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().hma({period: 6, input1: 'close'})
 * 
 * result = {
    "hma": [
        591.5863492063492,
        607.144603174603,
        604.1765079365077,
        585.2141269841269,
        560.7953968253968,
        556.476507936508
    ]
} */
  /**
   * @Summary Kaufman Adaptive Moving Average
   * @name MonkeySet.Indicator#kama
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns kama - {array} the result from kama
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().kama({period: 6, input1: 'close'})
 * 
 * result = {
    "kama": [
        583.87,
        583.528298665093,
        592.7795280161166,
        591.3684576451175,
        589.7260604689839,
        589.4998495775989,
        589.2327605634981
    ]
} */
  /**
   * @Summary Klinger Volume Oscillator
   * @name MonkeySet.Indicator#kvo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @returns kvo - {array} the result from kvo
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().kvo({'short period': 2, 'long period': 6})
 * 
 * result = {
    "kvo": [
        0,
        94353523.32560045,
        100559164.75760746,
        90216472.08568853,
        63422586.76139995,
        41988524.088267006,
        31321674.12264933,
        20253843.455754437,
        14168736.233366536,
        8512613.404952941,
        13240015.062858054
    ]
} */
  /**
   * @Summary Lag
   * @name MonkeySet.Indicator#lag
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns lag - {array} the result from lag
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().lag({period: 6, input1: 'close'})
 * 
 * result = {
    "lag": [
        531.61,
        497.82,
        508.93,
        525.09,
        550.68,
        583.87
    ]
} */
  /**
   * @Summary Linear Regression
   * @name MonkeySet.Indicator#linreg
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns linreg - {array} the result from linreg
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().linreg({period: 6, input1: 'close'})
 * 
 * result = {
    "linreg": [
        564.1457142857142,
        588.3485714285717,
        608.4633333333334,
        605.0857142857146,
        587.0219047619051,
        564.2614285714286,
        562.3900000000002
    ]
} */
  /**
   * @Summary Linear Regression Intercept
   * @name MonkeySet.Indicator#linregintercept
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns linregintercept - {array} the result from linregintercept
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().linregintercept({period: 6, input1: 'close'})
 * 
 * result = {
    "linregintercept": [
        501.8542857142859,
        493.8114285714282,
        510.0933333333332,
        538.7842857142853,
        570.9047619047614,
        594.6085714285712,
        592.8699999999995
    ]
} */
  /**
   * @Summary Linear Regression Slope
   * @name MonkeySet.Indicator#linregslope
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns linregslope - {array} the result from linregslope
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().linregslope({period: 6, input1: 'close'})
 * 
 * result = {
    "linregslope": [
        12.45828571428567,
        18.9074285714287,
        19.674000000000042,
        13.260285714285871,
        3.223428571428771,
        -6.069428571428511,
        -6.095999999999878
    ]
} */
  /**
   * @Summary Vector Natural Log
   * @name MonkeySet.Indicator#ln
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns ln - {array} the result from ln
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().ln({input1: 'close'})
 * 
 * result = {
    "ln": [
        6.2759101377983555,
        6.210238565904249,
        6.232310482535197,
        6.263569676470854,
        6.311153878194743,
        6.369678355308833,
        6.363183263916264,
        6.408545265388375,
        6.371389600314617,
        6.340817752415979,
        6.3162798188328235,
        6.3509555223061955
    ]
} */
  /**
   * @Summary Vector Base-10 Log
   * @name MonkeySet.Indicator#log10
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns log10 - {array} the result from log10
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().log10({input1: 'close'})
 * 
 * result = {
    "log10": [
        2.725593141766503,
        2.6970723404749797,
        2.7066580520728287,
        2.7202337475078284,
        2.7408993037422844,
        2.766316161209207,
        2.7634953788579573,
        2.7831958457853823,
        2.7670593454724037,
        2.753782160628439,
        2.7431254714759663,
        2.7581849381505656
    ]
} */
  /**
   * @Summary Moving Average Convergence/Divergence
   * @name MonkeySet.Indicator#macd
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @param options.signal period {number} The signal period option 
   * @param options.input1 {array} The first input
 * @returns macd - {array} the result from macd
   * @returns macd_signal - {array} the result from macd
   * @returns macd_histogram - {array} the result from macd
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().macd({'short period': 2, 'long period': 4, 'signal period': 6, input1: 'close'})
 * 
 * result = {
    "macd": [
        1.0273303703703505,
        8.872299456790188,
        16.926013418930097,
        13.015152632976651,
        15.940939773658897,
        6.371179928819629,
        -1.9377533545001597,
        -6.74947244996406,
        -0.7039569490664235
    ],
    "macd_signal": [
        1.0273303703703505,
        3.268750109347447,
        7.170825340656775,
        8.840633138462454,
        10.86929217709001,
        9.584117249012758,
        6.292154219437639,
        2.565975171037154,
        1.6317088510075606
    ],
    "macd_histogram": [
        0,
        5.6035493474427405,
        9.755188078273322,
        4.174519494514197,
        5.071647596568887,
        -3.212937320193129,
        -8.229907573937798,
        -9.315447621001214,
        -2.335665800073984
    ]
} */
  /**
   * @Summary Market Facilitation Index
   * @name MonkeySet.Indicator#marketfi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns marketfi - {array} the result from marketfi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().marketfi()
 * 
 * result = {
    "marketfi": [
        -0.00006270188419062285,
        0.00006413843569153468,
        0.00021358725479942461,
        -0.00010191600218971387,
        -0.00014112075932307588,
        -0.00008697869475832974,
        -0.0002467458560551344,
        0.00007213966238638003,
        0.0002881360009348924,
        0.00023346732754211168,
        -0.00014425851125216387,
        0.0002063857318485491
    ]
} */
  /**
   * @Summary Mass Index
   * @name MonkeySet.Indicator#mass
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns mass - {array} the result from mass
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().mass({period: 6})
 * 
 * result = {
    "mass": []
} */
  /**
   * @Summary Maximum In Period
   * @name MonkeySet.Indicator#max
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns max - {array} the result from max
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().max({period: 6, input1: 'close'})
 * 
 * result = {
    "max": [
        583.87,
        583.87,
        607.01,
        607.01,
        607.01,
        607.01,
        607.01
    ]
} */
  /**
   * @Summary Mean Deviation Over Period
   * @name MonkeySet.Indicator#md
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns md - {array} the result from md
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().md({period: 6, input1: 'close'})
 * 
 * result = {
    "md": [
        22.849999999999984,
        30.466666666666658,
        31.045000000000005,
        22.700000000000024,
        13.32888888888893,
        12.700000000000026,
        13.02666666666668
    ]
} */
  /**
   * @Summary Median Price
   * @name MonkeySet.Indicator#medprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @returns medprice - {array} the result from medprice
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().medprice()
 * 
 * result = {
    "medprice": [
        530.2367935153557,
        503.279937923934,
        516.1767185875457,
        519.8893555871775,
        541.6448757387192,
        577.09860660758,
        562.52663088349,
        611.01,
        584.0055689934022,
        567.6053689139085,
        552.51,
        581.3711881609391
    ]
} */
  /**
   * @Summary Money Flow Index
   * @name MonkeySet.Indicator#mfi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns mfi - {array} the result from mfi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().mfi({period: 6})
 * 
 * result = {
    "mfi": [
        66.86763430227393,
        82.9700339712526,
        66.17370091890504,
        50.190209756889146,
        34.339462935766,
        34.32541222415237
    ]
} */
  /**
   * @Summary Minimum In Period
   * @name MonkeySet.Indicator#min
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns min - {array} the result from min
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().min({period: 6, input1: 'close'})
 * 
 * result = {
    "min": [
        497.82,
        497.82,
        508.93,
        525.09,
        550.68,
        553.51,
        553.51
    ]
} */
  /**
   * @Summary Momentum
   * @name MonkeySet.Indicator#mom
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns mom - {array} the result from mom
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().mom({period: 6, input1: 'close'})
 * 
 * result = {
    "mom": [
        48.48000000000002,
        109.19,
        75.94,
        42.16999999999996,
        2.830000000000041,
        -10.830000000000041
    ]
} */
  /**
   * @Summary Mesa Sine Wave
   * @name MonkeySet.Indicator#msw
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns msw_sine - {array} the result from msw
   * @returns msw_lead - {array} the result from msw
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().msw({period: 6, input1: 'close'})
 * 
 * result = {
    "msw_sine": [
        0.5124011012636237,
        0.38091497509396904,
        0.01726612289849503,
        -0.6320488759537279,
        -0.9859245640034091,
        -0.48856567336807144
    ],
    "msw_lead": [
        -0.24490298600446153,
        -0.3844504762160346,
        -0.6947923701247262,
        -0.9948832596303471,
        -0.5789322275475646,
        0.27150173284172013
    ]
} */
  /**
   * @Summary Vector Multiplication
   * @name MonkeySet.Indicator#mul
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @param options.input2 {array} The second input
 * @returns mul - {array} the result from mul
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().mul({input1: 'close', input2: 'open'})
 * 
 * result = {
    "mul": [
        281545.9721,
        250313.8524,
        262572.2549,
        272568.96810000006,
        298292.34239999996,
        336817.0869,
        327803.0581,
        371496.1901,
        342072.9169,
        322351.1676,
        305819.8101,
        332959.16159999993
    ]
} */
  /**
   * @Summary Normalized Average True Range
   * @name MonkeySet.Indicator#natr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns natr - {array} the result from natr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().natr({period: 6})
 * 
 * result = {
    "natr": [
        3.0631637329736248,
        3.2807973573351252,
        3.489176096792107,
        3.7871288850870624,
        3.8562762480217825,
        3.7977502129633867,
        3.950488015933197
    ]
} */
  /**
   * @Summary Negative Volume Index
   * @name MonkeySet.Indicator#nvi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns nvi - {array} the result from nvi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().nvi()
 * 
 * result = {
    "nvi": [
        1000,
        936.4383664716615,
        936.4383664716615,
        966.1729940278718,
        1013.2589543721426,
        1074.3290217354233,
        1074.3290217354233,
        1124.1849704073838,
        1124.1849704073838,
        1090.336598412113,
        1063.9075742817909,
        1063.9075742817909
    ]
} */
  /**
   * @Summary On Balance Volume
   * @name MonkeySet.Indicator#obv
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns obv - {array} the result from obv
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().obv()
 * 
 * result = {
    "obv": [
        0,
        -27749,
        2,
        27744,
        55476,
        83204,
        55470,
        83194,
        55457,
        27726,
        -2,
        27727
    ]
} */
  /**
   * @Summary Percentage Price Oscillator
   * @name MonkeySet.Indicator#ppo
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @param options.input1 {array} The first input
 * @returns ppo - {array} the result from ppo
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().ppo({'short period': 2, 'long period': 6, input1: 'close'})
 * 
 * result = {
    "ppo": [
        -2.466182589838406,
        -1.7854808955040744,
        -0.09084035316286129,
        2.1661063276472134,
        4.5461094125563415,
        3.9242646687955323,
        4.768779228891058,
        2.5857710873591846,
        0.4147580809054185,
        -1.1091306237722542,
        0.050895253299509315
    ]
} */
  /**
   * @Summary Parabolic SAR
   * @name MonkeySet.Indicator#psar
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.acceleration factor step {number} The acceleration factor step option 
   * @param options.acceleration factor maximum {number} The acceleration factor maximum option 
   * @returns psar - {array} the result from psar
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().psar({'acceleration factor step': 3.4, 'acceleration factor maximum': 5.351})
 * 
 * result = {
    "psar": [
        535.2830913165243,
        529.3667421703266,
        519.1403485415151,
        502.39004919793183,
        521.303032453551,
        543.601656187493,
        565.9482556694066,
        565.9482556694066,
        612.01,
        588.0015831223677,
        554.51
    ]
} */
  /**
   * @Summary Positive Volume Index
   * @name MonkeySet.Indicator#pvi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns pvi - {array} the result from pvi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().pvi()
 * 
 * result = {
    "pvi": [
        1000,
        1000,
        1022.3173034430116,
        1022.3173034430116,
        1022.3173034430116,
        1022.3173034430116,
        1015.6987763616158,
        1015.6987763616158,
        978.6523176399372,
        978.6523176399372,
        978.6523176399372,
        1013.1830031984781
    ]
} */
  /**
   * @Summary Qstick
   * @name MonkeySet.Indicator#qstick
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns qstick - {array} the result from qstick
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().qstick({period: 6})
 * 
 * result = {
    "qstick": [
        2.0000000000000093,
        4.166666666666676,
        4.166666666666676,
        5.333333333333333,
        4.166666666666666,
        2.833333333333333,
        0.3333333333333333
    ]
} */
  /**
   * @Summary Rate of Change
   * @name MonkeySet.Indicator#roc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns roc - {array} the result from roc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().roc({period: 6, input1: 'close'})
 * 
 * result = {
    "roc": [
        0.09119467278644122,
        0.21933630629544815,
        0.149215019747313,
        0.08031004208802292,
        0.005139100748165979,
        -0.01854864952814846
    ]
} */
  /**
   * @Summary Rate of Change Ratio
   * @name MonkeySet.Indicator#rocr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns rocr - {array} the result from rocr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().rocr({period: 6, input1: 'close'})
 * 
 * result = {
    "rocr": [
        1.0911946727864412,
        1.219336306295448,
        1.149215019747313,
        1.080310042088023,
        1.005139100748166,
        0.9814513504718515
    ]
} */
  /**
   * @Summary Vector Round
   * @name MonkeySet.Indicator#round
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns round - {array} the result from round
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().round({input1: 'close'})
 * 
 * result = {
    "round": [
        532,
        498,
        509,
        525,
        551,
        584,
        580,
        607,
        585,
        567,
        554,
        573
    ]
} */
  /**
   * @Summary Relative Strength Index
   * @name MonkeySet.Indicator#rsi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns rsi - {array} the result from rsi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().rsi({period: 6, input1: 'close'})
 * 
 * result = {
    "rsi": [
        69.60847759262255,
        75.90492804186655,
        63.01942008119035,
        54.232195212075304,
        47.96559789336215,
        56.5274959435042
    ]
} */
  /**
   * @Summary Vector Sine
   * @name MonkeySet.Indicator#sin
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns sin - {array} the result from sin
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().sin({input1: 'close'})
 * 
 * result = {
    "sin": [
        -0.6294471624182882,
        0.9925141210829078,
        -0.008009795896839006,
        -0.4295793014998585,
        -0.7841254173746012,
        -0.44952504940023136,
        0.8933028557135758,
        -0.6308264413968909,
        0.5087794521923408,
        0.9795616074639399,
        0.5561058714777203,
        0.9551414509186585
    ]
} */
  /**
   * @Summary Vector Hyperbolic Sine
   * @name MonkeySet.Indicator#sinh
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns sinh - {array} the result from sinh
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().sinh({input1: 'close'})
 * 
 * result = {
    "sinh": [
        3.7519714836536333e+230,
        7.933210635055371e+215,
        5.302255842959136e+220,
        5.5291644483737386e+227,
        7.18216368720967e+238,
        1.8641856183146834e+253,
        4.254573312589334e+251,
        2.089601466703409e+263,
        5.067381891139494e+253,
        1.1398765224558133e+246,
        1.2170507339705748e+240,
        3.690455000859061e+248
    ]
} */
  /**
   * @Summary Simple Moving Average
   * @name MonkeySet.Indicator#sma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns sma - {array} the result from sma
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().sma({period: 6, input1: 'close'})
 * 
 * result = {
    "sma": [
        533,
        541.0799999999999,
        559.2783333333332,
        571.935,
        578.9633333333333,
        579.435,
        577.63
    ]
} */
  /**
   * @Summary Vector Square Root
   * @name MonkeySet.Indicator#sqrt
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns sqrt - {array} the result from sqrt
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().sqrt({input1: 'close'})
 * 
 * result = {
    "sqrt": [
        23.05666931714119,
        22.3118802434936,
        22.559476944291063,
        22.91484235162878,
        23.4665719695059,
        24.16340207834981,
        24.085057608401108,
        24.637572932413615,
        24.184085676328557,
        23.81722066069003,
        23.526793236648295,
        23.938253904577085
    ]
} */
  /**
   * @Summary Standard Deviation Over Period
   * @name MonkeySet.Indicator#stddev
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns stddev - {array} the result from stddev
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().stddev({period: 6, input1: 'close'})
 * 
 * result = {
    "stddev": [
        28.230706686159817,
        33.180452076487995,
        34.38486993658264,
        26.623132641872488,
        17.242215312684355,
        16.484105222909964,
        16.492589244867283
    ]
} */
  /**
   * @Summary Standard Error Over Period
   * @name MonkeySet.Indicator#stderr
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns stderr - {array} the result from stderr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().stderr({period: 6, input1: 'close'})
 * 
 * result = {
    "stderr": [
        11.525137743211495,
        13.54586283704436,
        14.037564369432141,
        10.868848387837113,
        7.0391049252132305,
        6.729607777079429,
        6.733071364539763
    ]
} */
  /**
   * @Summary Stochastic Oscillator
   * @name MonkeySet.Indicator#stoch
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.%k period {number} The %k period option 
   * @param options.%k slowing period {number} The %k slowing period option 
   * @param options.%d period {number} The %d period option 
   * @returns stoch_k - {array} the result from stoch
   * @returns stoch_d - {array} the result from stoch
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().stoch({'%k period': 6, '%k slowing period': 6, '%d period': 6})
 * 
 * result = {
    "stoch_k": [],
    "stoch_d": []
} */
  /**
   * @Summary Stochastic RSI
   * @name MonkeySet.Indicator#stochrsi
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns stochrsi - {array} the result from stochrsi
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().stochrsi({period: 6, input1: 'close'})
 * 
 * result = {
    "stochrsi": [
        0.3064460745706306
    ]
} */
  /**
   * @Summary Vector Subtraction
   * @name MonkeySet.Indicator#sub
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @param options.input2 {array} The second input
 * @returns sub - {array} the result from sub
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().sub({input1: 'close', input2: 'open'})
 * 
 * result = {
    "sub": [
        2,
        -5,
        -6.999999999999943,
        6,
        9,
        7,
        15,
        -5,
        0,
        -1,
        1,
        -8
    ]
} */
  /**
   * @Summary Sum Over Period
   * @name MonkeySet.Indicator#sum
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns sum - {array} the result from sum
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().sum({period: 6, input1: 'close'})
 * 
 * result = {
    "sum": [
        3198,
        3246.48,
        3355.6699999999996,
        3431.6099999999997,
        3473.7799999999997,
        3476.61,
        3465.78
    ]
} */
  /**
   * @Summary Vector Tangent
   * @name MonkeySet.Indicator#tan
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns tan - {array} the result from tan
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().tan({input1: 'close'})
 * 
 * result = {
    "tan": [
        0.8100541797686693,
        8.126706801139454,
        -0.008010052850761167,
        0.4757092362983473,
        1.2634908060231524,
        -0.5032366404999172,
        -1.9875235324952614,
        0.8130003313887535,
        0.5909876703706315,
        -4.8699429783025945,
        0.6691110614332146,
        3.2251950898565687
    ]
} */
  /**
   * @Summary Vector Hyperbolic Tangent
   * @name MonkeySet.Indicator#tanh
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns tanh - {array} the result from tanh
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().tanh({input1: 'close'})
 * 
 * result = {
    "tanh": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
    ]
} */
  /**
   * @Summary Triple Exponential Moving Average
   * @name MonkeySet.Indicator#tema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns tema - {array} the result from tema
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().tema({period: 6, input1: 'close'})
 * 
 * result = {
    "tema": []
} */
  /**
   * @Summary Vector Degree Conversion
   * @name MonkeySet.Indicator#todeg
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns degrees - {array} the result from todeg
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().todeg({input1: 'close'})
 * 
 * result = {
    "degrees": [
        30459.009346949693,
        28522.984957202643,
        29159.541067592985,
        30085.4408645244,
        31551.639862264172,
        33453.286784303375,
        33236.708737743924,
        34779.1111222361,
        33510.58256381646,
        32501.603886591078,
        31713.786918286198,
        32832.77349217669
    ]
} */
  /**
   * @Summary Vector Radian Conversion
   * @name MonkeySet.Indicator#torad
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns radians - {array} the result from torad
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().torad({input1: 'close'})
 * 
 * result = {
    "radians": [
        9.278344836527056,
        8.68859808227817,
        8.882504162174742,
        9.164549369297026,
        9.611179124882373,
        10.190453903619291,
        10.124480457893906,
        10.594323092530779,
        10.207907196139235,
        9.900554714863034,
        9.660571942713814,
        10.001434745628305
    ]
} */
  /**
   * @Summary True Range
   * @name MonkeySet.Indicator#tr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns tr - {array} the result from tr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().tr()
 * 
 * result = {
    "tr": [
        -1.7401026900581655,
        29.219950802068183,
        21.320348541515102,
        12.373032453551048,
        18.511656187492918,
        27.62447923170953,
        24.764993902426454,
        31.91999999999996,
        27.000445135563382,
        20.501772316126676,
        16.75,
        30.72262314015336
    ]
} */
  /**
   * @Summary Triangular Moving Average
   * @name MonkeySet.Indicator#trima
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns trima - {array} the result from trima
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().trima({period: 6, input1: 'close'})
 * 
 * result = {
    "trima": [
        526.2116666666666,
        540.9016666666666,
        560.8291666666667,
        576.435,
        584.7266666666666,
        583.9766666666666,
        577.5466666666666
    ]
} */
  /**
   * @Summary Trix
   * @name MonkeySet.Indicator#trix
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns trix - {array} the result from trix
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().trix({period: 6, input1: 'close'})
 * 
 * result = {
    "trix": []
} */
  /**
   * @Summary Vector Truncate
   * @name MonkeySet.Indicator#trunc
   * @function
   * @param options {object} Options to pass along to the simple function
   * @param options.input1 {array} The first input
 * @returns trunc - {array} the result from trunc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().trunc({input1: 'close'})
 * 
 * result = {
    "trunc": [
        531,
        497,
        508,
        525,
        550,
        583,
        580,
        607,
        584,
        567,
        553,
        573
    ]
} */
  /**
   * @Summary Time Series Forecast
   * @name MonkeySet.Indicator#tsf
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns tsf - {array} the result from tsf
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().tsf({period: 6, input1: 'close'})
 * 
 * result = {
    "tsf": [
        576.6039999999999,
        607.2560000000004,
        628.1373333333335,
        618.3460000000006,
        590.245333333334,
        558.1920000000001,
        556.2940000000003
    ]
} */
  /**
   * @Summary Typical Price
   * @name MonkeySet.Indicator#typprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @returns typprice - {array} the result from typprice
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().typprice()
 * 
 * result = {
    "typprice": [
        530.6945290102371,
        501.459958615956,
        513.7611457250305,
        521.622903724785,
        544.6565838258127,
        579.3557377383866,
        568.3810872556601,
        609.6766666666666,
        584.293712662268,
        567.4902459426056,
        552.8433333333332,
        578.594125440626
    ]
} */
  /**
   * @Summary Ultimate Oscillator
   * @name MonkeySet.Indicator#ultosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.medium period {number} The medium period option 
   * @param options.long period {number} The long period option 
   * @returns ultosc - {array} the result from ultosc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().ultosc({'short period': 2, 'medium period': 4, 'long period': 6})
 * 
 * result = {
    "ultosc": [
        112.12837316555745,
        93.96256683497212,
        66.6516233788708,
        34.85965680009987,
        22.241082943495062,
        39.443011869187366
    ]
} */
  /**
   * @Summary Variance Over Period
   * @name MonkeySet.Indicator#var
   * @function
   * @param options {object} Options to pass along to the math function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns var - {array} the result from var
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().var({period: 6, input1: 'close'})
 * 
 * result = {
    "var": [
        796.9727999999886,
        1100.9424000001163,
        1182.3192805557046,
        708.7911916667363,
        297.29398888896685,
        271.7257249999675,
        272.005499999912
    ]
} */
  /**
   * @Summary Vertical Horizontal Filter
   * @name MonkeySet.Indicator#vhf
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns vhf - {array} the result from vhf
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().vhf({period: 6, input1: 'close'})
 * 
 * result = {
    "vhf": [
        0.6960847759262256,
        0.8400856531049253,
        0.6411018938801065,
        0.4358894993422586,
        0.45574580458301395,
        0.515762074616794
    ]
} */
  /**
   * @Summary Variable Index Dynamic Average
   * @name MonkeySet.Indicator#vidya
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @param options.alpha {number} The alpha option 
   * @param options.input1 {array} The first input
 * @returns vidya - {array} the result from vidya
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().vidya({'short period': 2, 'long period': 5, alpha: 0.2, input1: 'close'})
 * 
 * result = {
    "vidya": [
        525.09,
        528.6661860196283,
        534.5922901016371,
        535.174696341256,
        541.9677473347858,
        547.2456981214522,
        549.9914837988927,
        550.261365182593,
        552.7292156850543
    ]
} */
  /**
   * @Summary Annualized Historical Volatility
   * @name MonkeySet.Indicator#volatility
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns volatility - {array} the result from volatility
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().volatility({period: 6, input1: 'close'})
 * 
 * result = {
    "volatility": [
        0.6530194945867919,
        0.34541256220764527,
        0.5451257216220662,
        0.62530400678409,
        0.6023205613476835,
        0.5112932104407281
    ]
} */
  /**
   * @Summary Volume Oscillator
   * @name MonkeySet.Indicator#vosc
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.short period {number} The short period option 
   * @param options.long period {number} The long period option 
   * @returns vosc - {array} the result from vosc
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().vosc({'short period': 2, 'long period': 6})
 * 
 * result = {
    "vosc": [
        -0.04445672678337122,
        -0.030041577543315583,
        -0.02223410712031383,
        -0.00841361322619562,
        0.010818217878908081,
        -0.0030051327667612628,
        -0.007212275292547916
    ]
} */
  /**
   * @Summary Volume Weighted Moving Average
   * @name MonkeySet.Indicator#vwma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @returns vwma - {array} the result from vwma
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().vwma({period: 6})
 * 
 * result = {
    "vwma": [
        532.9917949103055,
        541.0703908409239,
        559.2678947305166,
        571.9306982097032,
        578.9621282439628,
        579.4344351552452,
        577.6295594501842
    ]
} */
  /**
   * @Summary Williams Accumulation/Distribution
   * @name MonkeySet.Indicator#wad
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @returns wad - {array} the result from wad
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().wad()
 * 
 * result = {
    "wad": [
        -33.79000000000002,
        -22.680000000000007,
        -6.519999999999982,
        19.069999999999936,
        52.25999999999999,
        48.48000000000002,
        75.39999999999998,
        53.25999999999999,
        35.64999999999998,
        21.899999999999977,
        41.42999999999995
    ]
} */
  /**
   * @Summary Weighted Close Price
   * @name MonkeySet.Indicator#wcprice
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @returns wcprice - {array} the result from wcprice
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().wcprice()
 * 
 * result = {
    "wcprice": [
        530.9233967576779,
        500.549968961967,
        512.5533592937728,
        522.4896777935888,
        546.1624378693596,
        580.4843033037899,
        571.3083154417451,
        609.01,
        584.437784496701,
        567.4326844569542,
        553.01,
        577.2055940804696
    ]
} */
  /**
   * @Summary Wilders Smoothing
   * @name MonkeySet.Indicator#wilders
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns wilders - {array} the result from wilders
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().wilders({period: 6, input1: 'close'})
 * 
 * result = {
    "wilders": [
        533,
        540.8483333333334,
        551.8752777777778,
        557.3743981481482,
        559.0219984567901,
        558.1033320473251,
        560.5927767061042
    ]
} */
  /**
   * @Summary Williams %R
   * @name MonkeySet.Indicator#willr
   * @function
   * @param options {object} Options to pass along to the indicator function
   * @param options.period {number} The period option 
   * @returns willr - {array} the result from willr
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().willr({period: 6})
 * 
 * result = {
    "willr": [
        10.853026715727742,
        5.710357422721592,
        -5.060886955722441,
        -29.920524006165483,
        -65.41599680099023,
        -101.7391304347826,
        -67.7739130434783
    ]
} */
  /**
   * @Summary Weighted Moving Average
   * @name MonkeySet.Indicator#wma
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns wma - {array} the result from wma
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().wma({period: 6, input1: 'close'})
 * 
 * result = {
    "wma": [
        543.3819047619048,
        556.8361904761905,
        575.6733333333334,
        582.9852380952382,
        581.6495238095239,
        574.3771428571429,
        572.5500000000001
    ]
} */
  /**
   * @Summary Zero-Lag Exponential Moving Average
   * @name MonkeySet.Indicator#zlema
   * @function
   * @param options {object} Options to pass along to the overlay function
   * @param options.period {number} The period option 
   * @param options.input1 {array} The first input
 * @returns zlema - {array} the result from zlema
   * @example
 * const result = await monkeyset.fetch('sets').last(12).ohlc().zlema({period: 6, input1: 'close'})
 * 
 * result = {
    "zlema": [
        497.82,
        494.51428571428573,
        511.0416326530613,
        534.2954518950437,
        565.2538942107454,
        577.8956387219611,
        592.8254562299721,
        591.9181830214087,
        573.5158450152919,
        558.8398892966371,
        564.5484923547408
    ]
} */