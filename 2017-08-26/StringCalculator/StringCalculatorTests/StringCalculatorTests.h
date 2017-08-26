//
//  StringCalculatorTests.h
//  StringCalculator
//
//  Created by Camtasia QA on 8/26/17.
//  Copyright © 2017 AaronW. All rights reserved.
//

#import <Foundation/Foundation.h>

#include <gtest/gtest.h>

@interface StringCalculatorTests : NSObject

TEST_F(StringCalculatorTestsFixure, Basic_Test_RunsAndPasses)
{
   int value = 1;
   ASSERT_EQ( value, 1 );
}

@end
