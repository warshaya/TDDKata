//
//  unitTests.m
//  unitTests
//
//  Created by Aaron Warshay on 3/3/23.
//

#import <XCTest/XCTest.h>

#import "StringCalculator.h"

@interface unitTests : XCTestCase

@end

@implementation unitTests

- (void)setUp {
    // Put setup code here. This method is called before the invocation of each test method in the class.
    StringCalculator * myObj = [[StringCalculator alloc] init]
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