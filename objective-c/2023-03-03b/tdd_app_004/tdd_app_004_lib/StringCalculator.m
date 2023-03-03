//
//  StringCalculator.m
//  tdd_app_004_lib
//
//  Created by Aaron Warshay on 3/3/23.
//

#import <Foundation/Foundation.h>

#import "StringCalculator.h"

@implementation StringCalculator

- (float) add:(NSString*)numbers {
    return [[[NSNumberFormatter alloc] init] numberFromString:numbers].floatValue;
}

@end
