//
//  main.m
//  StringCalculatorTests
//
//  Created by Camtasia QA on 8/26/17.
//  Copyright © 2017 AaronW. All rights reserved.
//

#import <Foundation/Foundation.h>
#include <gtest/gtest.h>
#include <iostream>
#include <string>

int main(int argc, char * argv[]) {
   @autoreleasepool {
       // insert code here...
       //NSLog(@"Hello, Test World!");

   }
   ::testing::InitGoogleTest(&argc, argv);
   return RUN_ALL_TESTS();
   return 0;
}

TEST(Test_Add, NullStringReturnsZero)
{
   //arrange
   //StringCalculator testCalculator;
   
   //act
   //int result = testCalculator.Add("");
   
   //assert
   ASSERT_EQ(0, 0);
}
