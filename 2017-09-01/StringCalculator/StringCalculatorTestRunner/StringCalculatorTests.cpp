//
//  StringCalculatorTests.cpp
//  StringCalculator
//
//  Created by Camtasia QA on 9/2/17.
//  Copyright © 2017 AaronW. All rights reserved.
//

#include <gtest/gtest.h>
#include "StringCalculator.hpp"

TEST( StringCalculator, Add_EmptyString_ReturnsZero )
{
   StringCalculator *myCalc = new StringCalculator;
   std::string input = "";
   int result = myCalc->add( input );
   EXPECT_EQ( result, 0 );
}

TEST( StringCalculator, Add_One_ReturnsOne )
{
   StringCalculator *myCalc = new StringCalculator;
   std::string input = "1";
   int result = myCalc->add( input );
   EXPECT_EQ( result, 1 );
}

TEST( StringCalculator, Add_Two_ReturnsTwo )
{
   StringCalculator *myCalc = new StringCalculator;
   std::string input = "2";
   int result = myCalc->add( input );
   EXPECT_EQ( result, 2 );
}

TEST( StringCalculator, Add_ArbNumber_ReturnsSameNumber )
{
   StringCalculator * myCalc = new StringCalculator;
   std::string input = "929508271";                   // 9 digits are too many
   int result = myCalc->add( input );
   EXPECT_EQ( result, 929508271 );
}

TEST( StringCalculator, Add_ZerosInFront_ReturnsSameNumber )
{
   StringCalculator * myCalc = new StringCalculator;
   std::string input = "000000089";
   int result = myCalc->add( input );
   EXPECT_EQ( result, 89 );
}

TEST( StringCalculator, Add_TwoOnes_ReturnsTwo )
{
   StringCalculator * myCalc = new StringCalculator;
   std::string input = "1,1";
   int result = myCalc->add( input );
   EXPECT_EQ( result, 2 );
}

TEST( StringCalculator, Add_OneAndTwo_ReturnsThree )
{
   StringCalculator *myCalc = new StringCalculator;
   std::string input = "1,2";
   int result = myCalc->add( input );
   EXPECT_EQ( result, 3 );
}

TEST( StringCalculator, Add_TwoRandomNumbers_ReturnsSum )
{
   StringCalculator *myCalc = new StringCalculator;
   std::string input = "432,68";
   int result = myCalc->add( input );
   EXPECT_EQ( result, 500 );
}

TEST( StringCalculator, Add_ThreeOnes_ReturnsThree )
{
   StringCalculator *myCalc = new StringCalculator;
   std::string input = "1,1,1";
   int result = myCalc->add( input );
   EXPECT_EQ( result, 3 );
}

TEST( StringCalculator, Add_ThreeRandomNumbers_ReturnsTheSum )
{
   StringCalculator *myCalc = new StringCalculator;
   std::string input = "346,97,4056";
   int result = myCalc->add( input );
   EXPECT_EQ( result, 4499 );
}

TEST( StringCalculator, Add_TwelveNumbers_ReturnsTheSum )
{
   StringCalculator *myCalc = new StringCalculator;
   std::string input = "0,1,2,3,4,5,6,7,8,9,10,11";
   int result = myCalc->add( input );
   EXPECT_EQ( result, 66 );
}
