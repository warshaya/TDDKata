//
//  StringCalculatorTest.m
//  StringCalculatorTest
//
//  Created by Camtasia QA on 8/26/17.
//  Copyright © 2017 AaronW. All rights reserved.
//

#import <XCTest/XCTest.h>
#import "StringCalculator.h"

@interface StringCalculatorTest : XCTestCase

@end

@implementation StringCalculatorTest

- (void)testAdd_EmptyString_ReturnsZero
{
   //arrange
   StringCalculator *myCalc = [[StringCalculator alloc] init];
   NSString *input = @"";
   //act
   int result = [myCalc add:input];
   //assert
   XCTAssertEqual(0, result);
}

- (void)testAdd_One_ReturnsOne
{
   StringCalculator *myCalc = [[StringCalculator alloc] init];
   NSString *input = @"1";
   int result = [myCalc add:input];
   XCTAssertEqual(1, result);
}

- (void)testAdd_Two_ReturnsTwo
{
   StringCalculator *myCalc = [[StringCalculator alloc] init];
   NSString *input = @"2";
   int result = [myCalc add:input];
   XCTAssertEqual(2, result);
}

- (void)testAdd_BiggerNumber_ReturnsTheSameNumber
{
   StringCalculator *myCalc = [[StringCalculator alloc] init];
   NSString *input = @"290302";
   int result = [myCalc add:input];
   XCTAssertEqual( result, 290302 );
}

- (void)testAdd_NumberWithZeroInFront_ReturnsNumber
{
   StringCalculator *myCalc = [[StringCalculator alloc] init];
   NSString *input = @"00005";
   int result = [myCalc add:input];
   XCTAssertEqual( result, 5 );
}

- (void)testAdd_TwoOnesSeparatedByComma_ReturnsTwo
{
   StringCalculator *myCalc = [[StringCalculator alloc] init];
   NSString *input = @"1,1";
   int result = [myCalc add:input];
   XCTAssertEqual( result, 2 );
}

- (void)testAdd_TwoRandomNumbersWithComma_ReturnsSum
{
   StringCalculator *myCalc = [[StringCalculator alloc] init];
   NSString *input = @"23,567";
   int result = [myCalc add:input];
   XCTAssertEqual( result, 590 );
}

- (void)testAdd_ThreeNumbers_ReturnsSum
{
   StringCalculator *myCalc = [[StringCalculator alloc] init];
   NSString *input = @"1,2,3";
   int result = [myCalc add:input];
   XCTAssertEqual( result, 6 );
}

- (void)testAdd_TenNumbers_ReturnsSum
{
   StringCalculator *myCalc = [[StringCalculator alloc] init];
   NSString *input = @"10,23,45,67,98,3,100,312,9,7";
   int result = [myCalc add:input];
   XCTAssertEqual( result, 674 );
}

- (void)testAdd_EmptyNumberInList_ReturnedSumCountsItAsZero
{
   StringCalculator *myCalc = [[StringCalculator alloc] init];
   NSString *input = @"1,2,,4";
   int result = [myCalc add:input];
   XCTAssertEqual( result, 7 );
}

- (void)testAdd_NewLineDelimiterBetweenOnes_ReturnsTwo
{
   StringCalculator *myCalc = [[StringCalculator alloc] init];
   NSString *input = @"1\n1";
   int result = [myCalc add:input];
   XCTAssertEqual( result, 2 );
}

- (void)testAdd_NewLineDelimiterMixedWithCommas_ReturnsSum
{
   StringCalculator *myCalc = [[StringCalculator alloc] init];
   NSString *input = @"1,2\n3\n4,5";
   int result = [myCalc add:input];
   XCTAssertEqual( result, 15 );
}

- (void)testAdd_EmtpyNumberInbetweenNewLines_ReturnsSumCountsItAsZero
{
   StringCalculator *myCalc = [[StringCalculator alloc] init];
   NSString *input = @"1\n\n2";
   int result = [myCalc add:input];
   XCTAssertEqual( result, 3 );
}

@end






















/*

 
 - (void)tearDown {
 // Put teardown code here. This method is called after the invocation of each test method in the class.
 [super tearDown];
 }
 */

/*
 - (void)testPerformanceExample {
 // This is an example of a performance test case.
 [self measureBlock:^{
 // Put the code you want to measure the time of here.
 }];
 }
 */
