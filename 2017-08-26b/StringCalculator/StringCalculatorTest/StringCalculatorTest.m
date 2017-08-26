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

/*
- (void)setUp {
    [super setUp];
    // Put setup code here. This method is called before the invocation of each test method in the class.
}

- (void)tearDown {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
    [super tearDown];
}
*/
 
- (void)testSimpleTest {
   int result = 1;
   XCTAssertEqual(1, result);
    // This is an example of a functional test case.
    // Use XCTAssert and related functions to verify your tests produce the correct results.
}

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

/*
- (void)testPerformanceExample {
    // This is an example of a performance test case.
    [self measureBlock:^{
        // Put the code you want to measure the time of here.
    }];
}
*/
@end
