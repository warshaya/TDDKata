//
//  tdd_app_004_unit_tests.m
//  tdd_app_004_unit_tests
//
//  Created by Aaron Warshay on 3/3/23.
//

#import <XCTest/XCTest.h>

#import "StringCalculator.h"

@interface tdd_app_004_unit_tests : XCTestCase

@property StringCalculator *stringCalculator;

@end

@implementation tdd_app_004_unit_tests

- (void)setUp {
    // Put setup code here. This method is called before the invocation of each test method in the class.
    self.stringCalculator = [[StringCalculator alloc] init];
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

- (void)testObjExists {
    // Test that the object is not null
    XCTAssertTrue(self.stringCalculator);
}

- (void)testObjHasMethod_add {
    // from https://stackoverflow.com/questions/2732863/check-if-a-method-exists
    XCTAssertTrue([self.stringCalculator respondsToSelector:@selector(add:)]);
}

- (void)testObjAcceptsEmptyString {
    bool result = [self.stringCalculator add:@""];
    XCTAssertEqual(result, 0);
}

- (void)testObj_add_singleNumeral_returnsNumber {
    float result = [self.stringCalculator add:@"1"];
    XCTAssertEqual(result, 1);
}

@end
