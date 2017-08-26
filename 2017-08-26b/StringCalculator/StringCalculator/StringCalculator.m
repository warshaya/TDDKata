//
//  StringCalculator.m
//  StringCalculator
//
//  Created by Camtasia QA on 8/26/17.
//  Copyright © 2017 AaronW. All rights reserved.
//

#import "StringCalculator.h"

@implementation StringCalculator

- (id)init
{
   self = [super init];
   if (self)
   {
      _numberFormatter = [[NSNumberFormatter alloc] init];
   }
   return self;
}

- (int)add:(NSString*)input
{
   if ( [input isEqualToString:@""] )
   {
      return 0;
   }
   NSNumber *resultNumber = [_numberFormatter numberFromString:input];
   return [resultNumber intValue];;
}

@end
