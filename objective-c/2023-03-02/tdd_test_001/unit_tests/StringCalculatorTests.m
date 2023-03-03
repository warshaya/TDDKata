//
//  StringCalculatorTests.m
//  tdd_test_001
//
//  Created by Aaron Warshay on 3/2/23.
//

#import <XCTest/XCTest.h>

#import "NSObject+StringCalculator.h"

@interface StringCalculatorTests : XCTestCase

@end

@implementation StringCalculatorTests

- (void)setUp {
    self.myObj = [[NSObject+StringCalculator alloc] init];
}

- (void)tearDown {
    // Put teardown code here. This method is called after the invocation of each test method in the class.
}

- (void)testExample {
    // This is an example of a functional test case.
    // Use XCTAssert and related functions to verify your tests produce the correct results.
}

- (void)testPerformanceExample {
    // This is an example of a performance test case.
    [self measureBlock:^{
        // Put the code you want to measure the time of here.
    }];
}

@end
