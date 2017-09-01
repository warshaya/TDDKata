//
//  main.cpp
//  StringCalculatorTestRunner
//
//  Created by Camtasia QA on 9/1/17.
//  Copyright © 2017 AaronW. All rights reserved.
//

#include <iostream>
#include <gtest/gtest.h>

int main(int argc, char ** argv) {
   // insert code here...
   std::cout << "Hello, World!\n";
   testing::InitGoogleTest( &argc, argv );
   RUN_ALL_TESTS();
   return 0;
}

TEST( blank, blank2 )
{
   EXPECT_EQ( 1, 1 );
}
