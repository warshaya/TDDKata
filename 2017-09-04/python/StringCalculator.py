class StringCalculator:

   #def __init__(self):

   def add( self, str ):
      if ( str == '' ):
         return 0
      if ( str.find(',') ):
         values = str.split(',')
         result = 0
         for x in values:
            result += int(x)
         return result
      return int( str )

