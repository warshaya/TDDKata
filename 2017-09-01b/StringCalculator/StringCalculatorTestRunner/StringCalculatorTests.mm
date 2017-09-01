//
//  StringCalculatorTests.cpp
//  StringCalculator
//
//  Created by Camtasia QA on 9/1/17.
//  Copyright © 2017 AaronW. All rights reserved.
//

#include "StringCalculatorTests.hpp"
#include <gtest/gtest.h>
#include "StringCalculator.h"
#include <Foundation/Foundation.h>

TEST( blank, blank2 )
{
   //arrange
   StringCalculator * myCalc = [[StringCalculator alloc] init];
   EXPECT_EQ( 1, 1 );
}
