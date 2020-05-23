[![MonkeySet Logo](https://i.imgur.com/eganiA2.png)](https://github.com/michaeldegroot/MonkeySet)

[![Package quality](https://packagequality.com/shield/monkeyset.svg)](https://packagequality.com/#?package=monkeyset)
[![NPM Version](https://img.shields.io/npm/v/monkeyset.svg)](https://www.npmjs.com/package/monkeyset)
[![Build Status](https://travis-ci.org/michaeldegroot/MonkeySet.png?branch=master)](https://travis-ci.org/michaeldegroot/MonkeySet)
[![Coverage Status](https://coveralls.io/repos/github/michaeldegroot/MonkeySet/badge.svg?branch=master)](https://coveralls.io/github/michaeldegroot/MonkeySet?branch=master)
[![Licensing](https://img.shields.io/github/license/michaeldegroot/monkeyset.svg)](https://raw.githubusercontent.com/michaeldegroot/MonkeySet/master/LICENSE)
[![Dependencies](https://david-dm.org/michaeldegroot/monkeyset/status.svg)](https://david-dm.org/michaeldegroot/monkeyset)
[![Dev Dependencies](https://david-dm.org/michaeldegroot/monkeyset/dev-status.svg)](https://david-dm.org/michaeldegroot/monkeyset?type=dev)
[![Commit Activity](https://img.shields.io/github/commit-activity/m/michaeldegroot/MonkeySet.svg)](https://github.com/michaeldegroot/MonkeySet/pulse/monthly)
[![Last Commit](https://img.shields.io/github/last-commit/michaeldegroot/MonkeySet.svg)](https://github.com/michaeldegroot/MonkeySet/commits/master)
[![Npm bundle size](https://img.shields.io/bundlephobia/min/monkeyset.svg)](https://www.npmjs.com/package/monkeyset)
[![Repo size](https://img.shields.io/github/repo-size/michaeldegroot/monkeyset.svg)](https://github.com/michaeldegroot/MonkeySet)
[![Downloads per week](https://img.shields.io/npm/dw/monkeyset.svg)](https://www.npmjs.com/package/monkeyset)
[![Node version](https://img.shields.io/node/v/monkeyset.svg)](https://www.npmjs.com/package/monkeyset)
[![Top language of repo](https://img.shields.io/github/languages/top/badges/shields.svg)](https://github.com/michaeldegroot/MonkeySet)
[![Help me pay for a beer :)](https://img.shields.io/liberapay/receives/givemeallyourcats.svg)](https://liberapay.com/GiveMeAllYourCats/)
[![Help us and star this project](https://img.shields.io/github/stars/michaeldegroot/monkeyset.svg?style=social)](https://github.com/michaeldegroot/MonkeySet)

# MonkeySet

## Intro

When dealing with large sets of data in finance, you want to make sure your data is valid, quick and persistent, prototyping ideas should be fast and reliable, chances of failure due to faulty data should be eliminated. This module aims to solve those problems.

The idea behind MonkeySet is that at it's core it's really just a simple javascript multidimensional array. To maximize speed of course, there is little to no overhead for your existing data to transform into a MonkeySet format.

On top of that you have an extensive operations, analyzes, validations, and filters components you can apply on your data.

It's core components are designed with performance in mind to maximize your results in for example back testing of your crypto currency bot :)

**Warning: this project is not yet finished and the api will change heavily, do not use it in any important project just yet :)**

## Features

- Chain style based queries: `const bollingerbands = await monkeyset.fetch('sets').last(20).convert('ohlc').bbands({period: 3, stddev: 6, real: 'close'})`
- Low memory footprint
- Maximum performance thanks to constant benchmarking and bottleneck testing
- Capable of technical analyze of candles (trend analyze, machine learning pattern detections, etc.)
- Technical indicators (RSI, SMA, etc.)
- Can parse OHLCV data in CSV, json, txt, etc. files to a MonkeySet
- Selecting your data between time column: `monkeyset.rows().between('1 day dago').and('now').fetch()`
- Data integrity and validation (save/load HMAC, ensuring validity of sets during inserts)

## Documentation

Checkout our [documentation](https://michaeldegroot.github.io/MonkeySet/)

## Getting Started

```javascript
const MonkeySet = require('monkeyset')
// Create a MonkeySet
const monkeyset = new MonkeySet([
	// A MonkeySet holds sets, these are arrays that hold OHLC data:
	// [time (unix), open (float/int), high (float/int), low (float/int), close (float/int), volume (float/int)]
	[new Date(), 125, 127, 139, 105, 21252],
	[new Date(), 115, 117, 119, 105, 21352],
	[new Date(), 115, 117, 119, 105, 21552]
])

// Fetch all rows
monkeyset.rows().fetch()

// But wait! there is more :)
```

## Querying data

blablalba

## Monkeyset files

blablalbal

## Validation

balblablal
