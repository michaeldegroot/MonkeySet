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
[![Greenkeeper badge](https://badges.greenkeeper.io/michaeldegroot/MonkeySet.svg)](https://greenkeeper.io/)
[![Help us and star this project](https://img.shields.io/github/stars/michaeldegroot/monkeyset.svg?style=social)](https://github.com/michaeldegroot/MonkeySet)

# MonkeySet

## Intro

When dealing with large sets of data in finance, you want to make sure your data is valid, quick and persistent, prototyping ideas should be fast and reliable, chances of failure due to faulty data should be eliminated. This module aims to solve those problems.

The idea behind MonkeySet is that at it's core it's really just a simple javascript multidimensional array. To maximize speed of course, there is little to no overhead for your existing data to transform into a MonkeySet format.

On top of that you have an extensive operations, analyzes, validations, and filters components you can apply on your data.

It's core components are designed with performance in mind to maximize your results in for example back testing of your crypto currency bot

**Warning: this project is not yet finished and the api will change heavily, do not use it in any important project just yet :)**

## Features

- Low memory footprint
- Maximum performance thanks to constant benchmarking and bottleneck testing
- Technical indicators (RSI, SMA, etc.)
- Selecting your data between two datetime`

## Documentation

Checkout our [documentation](https://michaeldegroot.github.io/MonkeySet/)

## Getting Started

```javascript
const MonkeySet = require('monkeyset')

// Create a template for this MonkeySet
const monkeyset = new MonkeySet({
	time: 'unix',
	open: 'float',
	high: 'float',
	low: 'float',
	close: 'float',
	volume: 'int'
})

// Add data
monkeyset.add([1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18])

// Do some fancy stuff

// Can display data
monkeyset.select('sets').table()
/*
time  open  high  low  close  volume
------------------------------------
1     2     3     4    5      6
7     8     9     10   11     12
13    14    15    16   17     18
*/

// Can show raw data in json
monkeyset.select('sets').json()
// [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]]

// Can get one single set from index value
console.log(monkeyset.select('set', { index: 1 }).json())
// [7, 8, 9, 10, 11, 12]

// Can bind template keys to values
monkeyset.select('sets').bind()
/*
[
  { time: 1, open: 2, high: 3, low: 4, close: 5, volume: 6 },
  { time: 7, open: 8, high: 9, low: 10, close: 11, volume: 12 },
  { time: 13, open: 14, high: 15, low: 16, close: 17, volume: 18 }
]
*/

// But wait! there is more :)
```
