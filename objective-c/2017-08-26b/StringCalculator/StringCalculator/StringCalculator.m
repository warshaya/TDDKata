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
   if ( [input containsString:@"\n"])
   {
      input = [input stringByReplacingOccurrencesOfString:@"\n" withString:@","];
   }
   NSArray<NSString *> *boxedInput = [input componentsSeparatedByString:@","];
   NSNumber *tempNumber = [[NSNumber alloc] init];
   int result = 0;
   for ( int i = 0; i < [boxedInput count]; i++ )
   {
      tempNumber = [_numberFormatter numberFromString:[boxedInput objectAtIndex:i]];
      result += [tempNumber intValue];
   }
   return result;
}

@end
